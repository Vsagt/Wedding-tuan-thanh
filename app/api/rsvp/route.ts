import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxfas04LPr5HOlqdydpiqLR78ZKoxp_41c49AfQDsbGRHhy7_R4osOpXIHXa0wctsSZYQ/exec";

    // Gọi đến Google Apps Script từ phía Server
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message }),
    });

    const result = await response.json();
    
    // Trả kết quả về cho frontend
    return NextResponse.json(result);
  } catch (error) {
    console.error("RSVP Error:", error);
    return NextResponse.json({ status: "error", message: "Internal Server Error" }, { status: 500 });
  }
}
