import { z } from "zod";
import { NextResponse } from "next/server";
import connectToDatabase from "../users/mongodb";
import { AllNotices } from "./db";

const NoticeRules = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(6),
  audience: z.enum(["sem2", "sem4", "sem6", "sem8", "all"]),
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const parsed = NoticeRules.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { title, description, audience } = parsed.data;

    const notice = new AllNotices({
      title,
      description,
      audience,
    });

    const savedNotice = await notice.save();
    return NextResponse.json(savedNotice, { status: 201 });


  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectToDatabase();
    const allNotices = await AllNotices.find().sort({ createdAt: -1 });
    return NextResponse.json(allNotices);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}