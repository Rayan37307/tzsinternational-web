import connectDB from "@/lib/dbConnect";
import Tour from "@/models/tour.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();
  
  // Get query parameters
  const url = new URL(req.url);
  const featured = url.searchParams.get('featured');
  
  // Build query
  let query: any = { published: true };
  
  // Add featured filter if specified
  if (featured === 'true') {
    query.featured = true;
  }
  
  const tours = await Tour.find(query).sort({ createdAt: -1 });
  return NextResponse.json(tours);
}

export async function POST(req: Request) {
  try {
    await connectDB();
    
    // Parse request body
    const body = await req.json();
    console.log('Received tour package data:', body);
    
    const { 
      title, 
      slug, 
      description, 
      duration, 
      price, 
      location, 
      coverImage,
      featured,
      published 
    } = body;

    // Validate required fields
    if (!title || !slug || !description || !duration || !price || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new tour
    const newTour = new Tour({
      title,
      slug,
      description,
      duration,
      price,
      location,
      coverImage,
      featured,
      published,
    });

    // Save to database
    await newTour.save();
    
    // Return success response
    return NextResponse.json(
      { success: true, tour: newTour },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating tour package:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A tour package with this slug already exists" },
        { status: 409 }
      );
    }
    
    // Handle other errors
    return NextResponse.json(
      { error: error.message || "Failed to create tour package" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    
    const body = await req.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { error: "Missing tour ID" },
        { status: 400 }
      );
    }
    
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    );
    
    if (!updatedTour) {
      return NextResponse.json(
        { error: "Tour package not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedTour);
  } catch (error: any) {
    console.error('Error updating tour package:', error);
    return NextResponse.json(
      { error: error.message || "Failed to update tour package" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    
    // Get ID from URL
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: "Missing tour ID" },
        { status: 400 }
      );
    }
    
    const deletedTour = await Tour.findByIdAndDelete(id);
    
    if (!deletedTour) {
      return NextResponse.json(
        { error: "Tour package not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Tour package deleted successfully" });
  } catch (error: any) {
    console.error('Error deleting tour package:', error);
    return NextResponse.json(
      { error: error.message || "Failed to delete tour package" },
      { status: 500 }
    );
  }
}