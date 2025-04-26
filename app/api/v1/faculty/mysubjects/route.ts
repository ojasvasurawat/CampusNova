import { z } from "zod";
import { NextResponse } from "next/server";
import connectToDatabase from "../../users/mongodb";
import { Subject } from "../../users/db";

// zod validation schema
const SubjectRules = z.object({
  subjectName: z.string().min(3).max(100),
  subjectProgress: z.number().min(0).max(100),
});

// POST - add a subject
export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const parsed = SubjectRules.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { subjectName, subjectProgress } = parsed.data;

    const newSubject = new Subject({
      subjectName,
      subjectProgress,
    });

    const savedSubject = await newSubject.save();

    return NextResponse.json(savedSubject, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET - fetch all subjects
export async function GET() {
  try {
    await connectToDatabase();
    const allSubjects = await Subject.find().sort({ createdAt: -1 });
    return NextResponse.json(allSubjects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

