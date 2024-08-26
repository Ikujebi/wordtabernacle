import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

// Interface for ContactRequest
interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Function to handle POST request

async function handlePost(request: NextRequest) {
  try {
    // Parsing the JSON body
    console.log('POST request received');
    const body: ContactRequest = await request.json();
    console.log('Request body:', body);
    const { firstName, lastName, email, phone, message } = body;

    // Creating new contact document
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    
    // Saving the new contact to the database
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

// Function to handle GET request
async function handleGet() {
  try {
    // Fetching all contact messages from the database
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

// Establishing database connection
connect()
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

export async function POST(request: NextRequest) {
  return handlePost(request);
}

export async function GET() {
  return handleGet();
}
