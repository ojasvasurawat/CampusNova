

import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectToDatabase from "./mongodb";
import { Student } from "./db";

// ✅ Define Zod validation schema
const StudentRules = z.object({
  enrollmentNumber: z.string().min(3).max(100),
  password: z.string().min(6),
  collegeId: z.string().min(3),
  courseName: z.enum(["M.Tech", "B.Sc", "B.Tech", "BBA"]),
  yearOfAdmission: z.string().min(4).max(4),
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();

    // ✅ Validate request body using Zod
    const parsed = StudentRules.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { enrollmentNumber, password, collegeId, courseName, yearOfAdmission } = parsed.data;

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Save student to DB
    const student = new Student({
      enrollmentNumber,
      password: hashedPassword,
      collegeId,
      courseName,
      yearOfAdmission,
    });

    await student.save();

    return NextResponse.json({ message: "Student signup successful!" }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}

// Optional: method not allowed
export function GET() {
  return NextResponse.json({ error: "GET method not supported" }, { status: 405 });
}
