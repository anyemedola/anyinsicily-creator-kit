import { styled } from '@mui/material/styles';
import { palette } from '@/lib/theme';
import { dmMono, playfair } from '@/lib/fonts';

export const Card = styled('div')({
    background: palette.white,
    border: `1px solid ${palette.border}`,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(196,53,96,0.06)',
});

export const Header = styled('div')({
    background: 'linear-gradient(90deg, rgba(196,53,96,0.14) 0%, rgba(110,207,184,0.16) 100%)',
    padding: '16px 24px',
    borderBottom: `1px solid ${palette.border}`,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    '@media (max-width: 600px)': { padding: '14px 18px' },
});

export const Tag = styled('div')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    color: palette.lemonDeep,
});

export const SubjectInput = styled('input')({
    fontFamily: playfair.style.fontFamily,
    fontStyle: 'italic',
    fontSize: 13,
    color: palette.textMid,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: 0,
    '&::placeholder': { color: palette.textLight, opacity: 0.7 },
});

export const Body = styled('div')({
    padding: '26px 28px',
    fontSize: 13.5,
    lineHeight: 1.85,
    color: palette.charcoal,
    whiteSpace: 'pre-wrap',
    '@media (max-width: 600px)': { padding: 18, fontSize: 13 },
    '& strong': { color: palette.charcoal, fontWeight: 500 },
});

export const Placeholder = styled('span')({
    background: 'rgba(196,53,96,0.14)',
    color: palette.lemonDeep,
    padding: '1px 6px',
    borderRadius: 4,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 11,
});

export const FieldsPanel = styled('div')({
    display: 'flex',
    gap: 10,
    padding: '12px 24px',
    borderBottom: `1px solid ${palette.border}`,
    background: palette.warmBg,
    flexWrap: 'wrap',
    '@media (max-width: 600px)': { padding: '10px 18px', flexDirection: 'column' },
});

export const FieldRow = styled('label', {
    shouldForwardProp: (prop) => prop !== 'wide',
})<{ wide?: boolean }>(({ wide }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    flex: wide ? '1 1 100%' : 1,
    minWidth: wide ? 220 : 140,
}));

export const FieldLabel = styled('span')({
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: palette.textLight,
});

export const FieldInput = styled('input')({
    padding: '5px 10px',
    borderRadius: 6,
    border: `1px solid ${palette.border}`,
    background: palette.white,
    color: palette.charcoal,
    fontSize: 12,
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.15s',
    '&:focus': { borderColor: palette.lemon },
    '&::placeholder': { color: palette.textLight },
});

export const FilledValue = styled('span')({
    color: palette.terra,
    fontWeight: 500,
});

export const SignaturePreview = styled('div')({
    margin: '16px 0 0',
    paddingTop: 12,
    borderTop: `1px dashed ${palette.border}`,
    color: palette.textMid,
    whiteSpace: 'pre-wrap',
});

export const Actions = styled('div')({
    display: 'flex',
    gap: 8,
    margin: '0 24px 24px',
    '@media (max-width: 600px)': { margin: '0 18px 20px', flexDirection: 'column' },
});

const baseBtn = {
    flex: 1,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    padding: 12,
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'all 0.2s',
};

export const GenerateBtn = styled('button')({
    ...baseBtn,
    background: 'none',
    border: `1px solid ${palette.sea}`,
    color: palette.sea,
    '&:hover:not(:disabled)': {
        background: palette.sea,
        color: 'white',
    },
    '&:disabled': {
        opacity: 0.5,
        cursor: 'default',
    },
});

export const CopyBtn = styled('button')<{ copied?: boolean }>(({ copied }) => ({
    ...baseBtn,
    background: copied ? palette.olive : 'none',
    border: `1px solid ${copied ? palette.olive : palette.border}`,
    color: copied ? 'white' : palette.textMid,
    '&:hover': copied ? {} : {
        background: palette.lemonPale,
        borderColor: palette.lemon,
        color: palette.lemonDeep,
    },
}));
