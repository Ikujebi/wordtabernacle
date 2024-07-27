import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";


interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { firstName,lastName, email,phone, message }: ContactRequest = await request.json();

    const newContact = new Contact({
      firstName,
      lastName,
       email,
       phone,
        message ,
    });

    await newContact.save();

    return NextResponse.json({ message: 'Message received' }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Error saving message', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

export async function GET() {
  try {
    const messages = await Contact.find();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Error retrieving messages', error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

export async function handler(request: any) {
  const { method } = request;
  if (method === 'POST') {
    return POST(request);
  } else if (method === 'GET') {
    return GET();
  } else {
    return NextResponse.json({ message: `Method ${method} Not Allowed` }, { status: 405 });
  }
}

connect()
  .then(() => {
    console.log("Logged in to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB ", error.message);
  });
