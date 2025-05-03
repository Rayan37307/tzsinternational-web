import connectDB from "@/lib/dbConnect";
import Post from "@/models/blog.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = params;
  const blog = await Post.findById(id);

  if (!blog) {
    return NextResponse.json(
      { message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}