import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();
  const RECAPTCHA_ENDPOINT = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
  const res = await fetch(RECAPTCHA_ENDPOINT);
  const data = await res.json();
  return NextResponse.json({data});
}