import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'files', 'Alexander_L.pdf');

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Alexander_L.pdf"',
      },
    });
  } catch (error) {
    console.error('File download error:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}
