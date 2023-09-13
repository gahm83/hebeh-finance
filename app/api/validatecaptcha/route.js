

import { NextResponse } from 'next/server';
export async function POST(req) {
  console.log(await req.json());
  // const request = req.json();
  // console.log(request);
  const res = await fetch(
    "https://api.github.com/search/users?q=richard&per_page=3"
  );
  const data = await res.json();
  return NextResponse.json({data});
}

// export async function POST(req) {
//   const data = await req.json();
//   console.log(data);
//   return new Response("Hello, Next.js!");
// }

// export default async function handler(req, res) {
//   const { token } = req.body;
//   const API_ENDPOINT = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

//   try {
//     const response = await fetch(API_ENDPOINT, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        
//       }
//     });
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting contact form' });
//   }
// }

// const response = await fetch(
//   `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//       'Access-Control-Allow-Origin': '127.0.0.0'
//     },
//   }
// );