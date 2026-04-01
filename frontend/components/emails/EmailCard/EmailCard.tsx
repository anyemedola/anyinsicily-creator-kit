'use client';

import { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import { useLang } from '@/lib/i18n/LangContext';
import { type Segment } from '@/lib/i18n/en';

interface EmailCardProps {
  tag: string;
  subject: string;
  segments: Segment[];
  signature: string;
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

function resolveSegment(seg: Segment, contactName: string, brand: string): string {
  if (seg.type !== 'placeholder') return seg.content;
  if (isNamePlaceholder(seg.content)) return contactName || seg.content;
  if (isBrandPlaceholder(seg.content)) return brand || seg.content;
  return seg.content;
}

export default function EmailCard({ tag, subject: initialSubject, segments: initialSegments, signature: initialSignature }: EmailCardProps) {
  const { dict } = useLang();
  const { card } = dict.emails;

  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [segments, setSegments] = useState<Segment[]>(initialSegments);
  const [subject, setSubject] = useState(initialSubject);
  const [signature, setSignature] = useState(initialSignature);
  const [contactName, setContactName] = useState('');
  const [brand, setBrand] = useState('');

  const sigRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (sigRef.current) {
      sigRef.current.style.height = 'auto';
      sigRef.current.style.height = sigRef.current.scrollHeight + 'px';
    }
  }, [signature]);

  const getPlainText = () => {
    const body = segments.map((s) => resolveSegment(s, contactName, brand)).join('');
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
          template: { tag, subject, segments },
          brand: brand || '[Brand]',
          contactName: contactName || '[Name]',
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
          placeholder="Subject line..."
        />
      </S.Header>

      <S.FieldsPanel>
        <S.FieldRow>
          <S.FieldLabel>Para / To</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder="Name / Marketing Team"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </S.FieldRow>
        <S.FieldRow>
          <S.FieldLabel>Marca / Brand</S.FieldLabel>
          <S.FieldInput
            type="text"
            placeholder="Brand name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </S.FieldRow>
      </S.FieldsPanel>

      <S.Body>
        {segments.map((seg, i) => {
          if (seg.type === 'strong') {
            const text = brand
              ? seg.content.replace(/\[Brand\]|\[Brand\/Product\]|\[Product\]|\[Produto\]|\[Brand\/Produto\]/g, brand)
              : seg.content;
            return <strong key={i}>{text}</strong>;
          }
          if (seg.type === 'placeholder') {
            const resolved = resolveSegment(seg, contactName, brand);
            if (resolved !== seg.content) {
              return <S.FilledValue key={i}>{resolved}</S.FilledValue>;
            }
            return <S.Placeholder key={i}>{seg.content}</S.Placeholder>;
          }
          return <span key={i}>{seg.content}</span>;
        })}

        <S.SignatureDivider>
          <S.SignatureInput
            ref={sigRef}
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            rows={1}
          />
        </S.SignatureDivider>
      </S.Body>

      <S.Actions>
        <S.GenerateBtn onClick={handleGenerate} disabled={generating}>
          {generating ? card.generating : card.generate}
        </S.GenerateBtn>
        <S.CopyBtn copied={copied} onClick={handleCopy}>
          {copied ? card.copied : card.copy}
        </S.CopyBtn>
      </S.Actions>
    </S.Card>
  );
}
