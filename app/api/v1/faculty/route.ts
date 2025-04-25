

import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectToDatabase from "../users/mongodb";
import { Faculty } from "../users/db";

// ✅ Define Zod validation schema
const FacultyRules = z.object({
  facultyNumber: z.string().min(3).max(100),
  password: z.string().min(6),
  collegeId: z.string().min(3)
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // ✅ Validate request body using Zod
    const parsed = FacultyRules.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { facultyNumber, password, collegeId} = parsed.data;

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Save student to DB
    const teacher = new Faculty({
      facultyNumber,
      password: hashedPassword,
      collegeId
    });

    await teacher.save();

    return NextResponse.json({ message: "Teacher signup successful!" }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}

// Optional: method not allowed
export function GET() {
  return NextResponse.json({ error: "GET method not supported" }, { status: 405 });
}
