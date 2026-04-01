'use client';

import { useState, type ReactNode } from 'react';
import { palette } from '@/lib/theme';

const SESSION_KEY = 'calendar_unlocked';

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  );
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/auth/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: input }),
      });
      const data = await res.json();

      if (data.ok) {
        sessionStorage.setItem(SESSION_KEY, '1');
        setUnlocked(true);
      } else {
        setError(true);
        setInput('');
      }
    } catch {
      setError(true);
      setInput('');
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: palette.white,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '2.5rem 2rem',
          maxWidth: 360,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(196,120,74,0.08)',
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 12 }}>🔒</div>
        <h2
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: palette.charcoal,
            margin: '0 0 8px',
          }}
        >
          Conteúdo restrito
        </h2>
        <p
          style={{
            fontSize: '0.875rem',
            color: palette.textMid,
            marginBottom: '1.5rem',
          }}
        >
          Insira a senha para acessar o calendário.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Senha"
            autoFocus
            disabled={loading}
            style={{
              padding: '0.75rem 1rem',
              borderRadius: 10,
              border: `1.5px solid ${error ? palette.rose : palette.border}`,
              fontSize: '1rem',
              outline: 'none',
              background: palette.warmBg,
              color: palette.charcoal,
              transition: 'border-color 0.2s',
              opacity: loading ? 0.6 : 1,
            }}
          />
          {error && (
            <p style={{ color: palette.rose, fontSize: '0.8rem', margin: 0 }}>
              Senha incorreta. Tente novamente.
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.75rem',
              borderRadius: 10,
              border: 'none',
              background: palette.rose,
              color: palette.white,
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: loading ? 'default' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
