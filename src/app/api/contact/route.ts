
// import { NextResponse } from 'next/server';
// import { SaveContactMessage } from '@/controller/contactController';

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     const id = await SaveContactMessage(data);
//     console.log('Saved ID:', id); // 🔥 log saved record ID
//     return NextResponse.json(
//       { message: 'Message saved & email sent!', id },
//       { status: 201 }
//     );
//   } catch (err: any) {
//     console.error('❌ /api/contact error:', err);
//     return NextResponse.json(
//       { message: err.message || 'Server Error' },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json({ message: 'API is working!' }, { status: 200 });
// }



import { NextResponse } from 'next/server';
import { SaveContactMessage } from '@/controller/contactController';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const id = await SaveContactMessage(data);
    console.log('Saved ID:', id); // 🔥 log saved record ID
    return NextResponse.json(
      { message: 'Message saved & email sent!', id },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error('❌ /api/contact error:', err);
    const message = err instanceof Error ? err.message : 'Server Error';
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API is working!' }, { status: 200 });
}
