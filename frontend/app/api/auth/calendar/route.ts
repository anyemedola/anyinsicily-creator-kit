export async function POST(request: Request) {
  const body = await request.json();
  const { password } = body;

  if (!password) {
    return Response.json({ ok: false, error: 'Password required.' }, { status: 400 });
  }

  if (process.env.CALENDAR_PASSWORD) {
    const ok = password === process.env.CALENDAR_PASSWORD;
    return Response.json(
      ok ? { ok: true } : { ok: false, error: 'Wrong password.' },
      { status: ok ? 200 : 401 }
    );
  }

  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:3001';

  try {
    const response = await fetch(`${backendUrl}/auth/calendar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });
  } catch {
    return Response.json(
      { ok: false, error: 'Calendar auth service unavailable.' },
      { status: 503 }
    );
  }
}
