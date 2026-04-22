'use client';

import '@/components/translator-i18n/i18n';
import { useMemo, useState } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

interface Segment {
  type: 'text' | 'strong' | 'placeholder';
  content: string;
}

interface EmailCardProps {
  tag: string;
  subject: string;
  segments: Segment[];
  signature: string;
}

interface CreatorProfile {
  name: string;
  handle: string;
  location: string;
  audience: string;
  contentStyle: string;
  metrics: string;
  link: string;
}

const nicheParams: Record<string, { niche: string }> = {
  fintech: { niche: 'fintech / expat services' },
  travel: { niche: 'travel / accommodation' },
  food: { niche: 'Italian food & lifestyle' },
};

function getNicheKey(tag: string): keyof typeof nicheParams {
  if (tag.includes('Fintech') || tag.includes('💳')) return 'fintech';
  if (tag.includes('Travel') || tag.includes('✈️')) return 'travel';
  return 'food';
}

function isNamePlaceholder(content: string) {
  const lower = content.toLowerCase();
  return lower.includes('name') || lower.includes('nome') || lower.includes('marketing');
}

function isBrandPlaceholder(content: string) {
  const lower = content.toLowerCase();
  return lower.includes('brand') || lower.includes('product') || lower.includes('produto');
}

function isCreatorNamePlaceholder(content: string) {
  const lower = content.toLowerCase();
  return lower.includes('creator name') || lower.includes('nome do creator') || lower.includes('seu nome');
}

function isHandlePlaceholder(content: string) {
  const lower = content.toLowerCase();
  return lower.includes('handle') || lower.includes('arroba');
}

function isLocationPlaceholder(content: string) {
  const lower = content.toLowerCase();
  return lower.includes('location') || lower.includes('localização') || lower.includes('cidade');
}

function replaceCreatorTokens(content: string, creator: CreatorProfile) {
  return content
    .replace(/\[Creator Name\]|\[Nome do creator\]|\[Seu nome\]/g, creator.name || '$&')
    .replace(/\[Handle\]|\[Arroba\]/g, creator.handle || '$&')
    .replace(/\[Location\]|\[Localização\]/g, creator.location || '$&')
    .replace(/\[audience\]|\[audiência\]/gi, creator.audience || '$&')
    .replace(/\[content style\]|\[estilo de conteúdo\]/gi, creator.contentStyle || '$&')
    .replace(/\[key metric\]|\[métrica principal\]|\[Métrica\]/gi, creator.metrics || '$&');
}

function buildSignature(creator: CreatorProfile, fallbackSignature: string) {
  const name = creator.name.trim();
  const handle = creator.handle.trim();
  const location = creator.location.trim();
  const link = creator.link.trim();

  if (!name && !handle && !location && !link) return replaceCreatorTokens(fallbackSignature, creator);

  const lines = [
    'Best,',
    name || '[Creator Name]',
    [handle, location].filter(Boolean).join(' | '),
    link,
  ].filter(Boolean);

  return lines.join('\n');
}

function looksLikeTemplateSignature(content: string) {
  const lower = content.toLowerCase();
  return (
    lower.includes('[creator name]') ||
    lower.includes('[nome do creator]') ||
    lower.includes('[handle]') ||
    lower.includes('[arroba]') ||
    lower.includes('[portfolio / link]') ||
    lower.trim().startsWith('best,') ||
    lower.trim().startsWith('warmly,') ||
    lower.trim().startsWith('regards,') ||
    lower.trim().startsWith('abraços,') ||
    lower.trim().startsWith('com carinho,') ||
    lower.includes('@anyinsicily') ||
    lower.includes('beacons.ai/anyinsicily')
  );
}

function removeTrailingTemplateSignature(segments: Segment[]) {
  let end = segments.length;

  while (end > 0 && looksLikeTemplateSignature(segments[end - 1].content)) {
    end -= 1;
  }

  return segments.slice(0, end);
}

function stripSignatureBlock(content: string) {
  return content
    .replace(/(?:^|\n)\s*(?:best|warmly|regards|cheers|abraços|com carinho),\s*[\s\S]*$/i, '')
    .trimEnd();
}

function resolveSegment(seg: Segment, contactName: string, brand: string, creator: CreatorProfile): string {
  if (seg.type !== 'placeholder') return replaceCreatorTokens(seg.content, creator);
  if (isCreatorNamePlaceholder(seg.content)) return creator.name || seg.content;
  if (isHandlePlaceholder(seg.content)) return creator.handle || seg.content;
  if (isLocationPlaceholder(seg.content)) return creator.location || seg.content;
  if (isBrandPlaceholder(seg.content)) return brand || seg.content;
  if (isNamePlaceholder(seg.content)) return contactName || seg.content;
  return seg.content;
}

export default function EmailCard({ tag, subject: initialSubject, segments: initialSegments, signature: initialSignature }: EmailCardProps) {
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [segments, setSegments] = useState<Segment[]>(initialSegments);
  const [subject, setSubject] = useState(initialSubject);
  const [contactName, setContactName] = useState('');
  const [brand, setBrand] = useState('');
  const [creator, setCreator] = useState<CreatorProfile>({
    name: '',
    handle: '',
    location: '',
    audience: '',
    contentStyle: '',
    metrics: '',
    link: '',
  });

  const visibleSegments = useMemo(() => removeTrailingTemplateSignature(segments), [segments]);
  const signature = buildSignature(creator, initialSignature);

  const getPlainText = () => {
    const body = stripSignatureBlock(
      visibleSegments.map((s) => resolveSegment(s, contactName, brand, creator)).join('')
    );
    return `${body.trim()}\n\n${signature}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPlainText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const nicheKey = getNicheKey(tag);
      const params = nicheParams[nicheKey];

      const response = await fetch('/api/generate-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template: { tag, subject, segments: visibleSegments },
          brand: brand || '[Brand]',
          contactName: contactName || '[Name]',
          creator,
          subject,
          signature,
          niche: params.niche,
          product: brand || '[Product]',
        }),
      });

      if (!response.ok) throw new Error('Generation failed');

      const generated = await response.json();
      if (generated.segments) setSegments(generated.segments);
      if (generated.subject) setSubject(generated.subject);
    } catch {
      // silently keep original content on error
    } finally {
      setGenerating(false);
    }
  };

  return (
    <S.Card>
      <S.Header>
        <S.Tag>{tag}</S.Tag>
        <S.SubjectInput
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={t('emails.card.subjectPlaceholder')}
        />
      </S.Header>

      <S.FieldsPanel>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.toLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.toPlaceholder')}
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.brandLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.brandPlaceholder')}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.creatorNameLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.creatorNamePlaceholder')}
            value={creator.name}
            onChange={(e) => setCreator((current) => ({ ...current, name: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.handleLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.handlePlaceholder')}
            value={creator.handle}
            onChange={(e) => setCreator((current) => ({ ...current, handle: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.locationLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.locationPlaceholder')}
            value={creator.location}
            onChange={(e) => setCreator((current) => ({ ...current, location: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>{t('emails.card.linkLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.linkPlaceholder')}
            value={creator.link}
            onChange={(e) => setCreator((current) => ({ ...current, link: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow wide>
          <S.FieldLabel>{t('emails.card.audienceLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.audiencePlaceholder')}
            value={creator.audience}
            onChange={(e) => setCreator((current) => ({ ...current, audience: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow wide>
          <S.FieldLabel>{t('emails.card.contentStyleLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.contentStylePlaceholder')}
            value={creator.contentStyle}
            onChange={(e) => setCreator((current) => ({ ...current, contentStyle: e.target.value }))}
          />
        </S.FieldRow>
        <S.FieldRow wide>
          <S.FieldLabel>{t('emails.card.metricsLabel')}</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder={t('emails.card.metricsPlaceholder')}
            value={creator.metrics}
            onChange={(e) => setCreator((current) => ({ ...current, metrics: e.target.value }))}
          />
        </S.FieldRow>
      </S.FieldsPanel>

      <S.Body>
        {visibleSegments.map((seg, i) => {
          if (seg.type === 'strong') {
            const text = brand
              ? seg.content.replace(/\[Brand\]|\[Brand\/Product\]|\[Product\]|\[Produto\]|\[Brand\/Produto\]/g, brand)
              : seg.content;
            return <strong key={i}>{replaceCreatorTokens(text, creator)}</strong>;
          }
          if (seg.type === 'placeholder') {
            const resolved = resolveSegment(seg, contactName, brand, creator);
            if (resolved !== seg.content) {
              return <S.FilledValue key={i}>{resolved}</S.FilledValue>;
            }
            return <S.Placeholder key={i}>{seg.content}</S.Placeholder>;
          }
          const content = i === visibleSegments.length - 1 ? stripSignatureBlock(seg.content) : seg.content;
          return <span key={i}>{content}</span>;
        })}

        <S.SignaturePreview>{signature}</S.SignaturePreview>
      </S.Body>

      <S.Actions>
        <S.GenerateBtn onClick={handleGenerate} disabled={generating}>
          {generating ? t('emails.card.generating') : t('emails.card.generate')}
        </S.GenerateBtn>
        <S.CopyBtn copied={copied} onClick={handleCopy}>
          {copied ? t('emails.card.copied') : t('emails.card.copy')}
        </S.CopyBtn>
      </S.Actions>
    </S.Card>
  );
}
