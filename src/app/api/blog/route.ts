import connectDB from "@/lib/dbConnect";
import Post from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await connectDB();
  const blogs = await Post.find({ published: true }).sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  try {
    await connectDB();
    
    // Parse request body
    const body = await req.json();
    console.log('Received blog post data:', body);
    
    const { title, slug, content, coverImage, tags, published } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new post
    const newPost = new Post({
      title,
      slug,
      content,
      coverImage,
      tags,
      published,
    });

    // Save to database
    await newPost.save();
    
    // Return success response
    return NextResponse.json(
      { success: true, post: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating post:', error);
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }
    
    // Handle other errors
    return NextResponse.json(
      { error: error.message || "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  await connectDB();
  const { id, title, slug, content, coverImage, tags, published } =
    await req.json();

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { title, slug, content, coverImage, tags, published },
    { new: true }
  );

  return NextResponse.json(updatedPost);
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    
    // Get ID from URL instead of request body
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: "Missing post ID" },
        { status: 400 }
      );
    }
    
    const deletedPost = await Post.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error: any) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: error.message || "Failed to delete post" },
      { status: 500 }
    );
  }
}
