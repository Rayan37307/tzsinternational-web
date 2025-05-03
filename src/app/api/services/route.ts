import connectDB from "@/lib/dbConnect";
import Service from "@/models/service.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDB();
        const services = Service.find({});
        return NextResponse.json(services);
    } catch (error) {
        throw error;
    }
}