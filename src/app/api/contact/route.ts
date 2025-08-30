
import { NextResponse } from 'next/server';
import { SaveContactMessage } from '@/controller/contactController';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const response = await SaveContactMessage(data); // returns status & message
    console.log('Response:', response);

    return NextResponse.json(response, { status: 201 });
  } catch (err: unknown) {
    console.error('❌ /api/contact error:', err);
    const message = err instanceof Error ? err.message : 'Server Error';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API is working!' }, { status: 200 });
}
