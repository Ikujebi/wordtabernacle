import { connect } from "@/dbConfig/dbConfig"
import mongoose from 'mongoose';
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"

const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

  
let contactMessages:any = [];

connect().then(() => {
    console.log("logged in to mongoDB successfully");

}).catch((error) => {
    console.error("error connecting to mongoDB ", error.message)
})

export default async function handler(NextRequest:any, NextResponse:any) {
    if (NextRequest.method === 'POST') {
      try {
        const { name, email, message } = NextRequest.body;
  
        const newContact = new Contact({
          name,
          email,
          message,
        });
  
        await newContact.save();
  
        NextResponse.status(200).json({ message: 'Message received' });
      } catch (error) {
        NextResponse.status(500).json({ message: 'Error saving message', error: "User does not exist" });
      }
    } else if (NextRequest.method === 'GET') {
      try {
        const messages = await Contact.find();
        NextResponse.status(200).json(messages);
      } catch (error) {
        NextResponse.status(500).json({ message: 'Error retrieving messages', error: "User does not exist" });
      }
    } else {
        NextResponse.setHeader('Allow', ['GET', 'POST']);
        NextResponse.status(405).end(`Method ${NextRequest.method} Not Allowed`);
    }
  }