// src/app/api/chat/route.ts

import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Use a dummy key if real one isn't available
const apiKey = process.env.OPENAI_API_KEY || "sk-dummy-key-for-build";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: apiKey,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Check if we have a real API key
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes("dummy")) {
    return new Response(
      JSON.stringify({
        error: "OpenAI API key is not configured. Please add a valid OPENAI_API_KEY to your environment variables.",
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request",
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
