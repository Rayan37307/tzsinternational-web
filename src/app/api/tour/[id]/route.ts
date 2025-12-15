import Tour from "@/models/tour.model";
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    await connectDB();
    const tour = await Tour.findById(id);

    if (!tour) {
        return NextResponse.json(
            { message: "Tour package not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(tour);
}
