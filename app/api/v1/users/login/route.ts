// app/api/v1/users/login.ts

import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectToDatabase from "../mongodb";
import { Student } from "../db";

const StudentLoginSchema = z.object({
  enrollmentNumber: z.string().min(3).max(100),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const parsed = StudentLoginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { enrollmentNumber, password } = parsed.data;

    const user = await Student.findOne({ enrollmentNumber });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "User login successful",
      user: {
        enrollmentNumber: user.enrollmentNumber,
        courseName: user.courseName,
        yearOfAdmission: user.yearOfAdmission,
        collegeId: user.collegeId,
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
