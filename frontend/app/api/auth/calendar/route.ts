export async function POST(request: Request) {
  const body = await request.json();

  const backendUrl = process.env.BACKEND_URL ?? 'http://localhost:3001';

  const response = await fetch(`${backendUrl}/auth/calendar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return Response.json(data, { status: response.status });
}
