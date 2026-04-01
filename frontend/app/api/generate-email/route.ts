export async function POST(request: Request) {
  const body = await request.json();

  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:3001';

  const response = await fetch(`${backendUrl}/generate-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    return Response.json({ error }, { status: response.status });
  }

  const data = await response.json();
  return Response.json(data);
}
