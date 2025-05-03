import Tour from "@/models/tour.model";
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
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
