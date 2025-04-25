// app/api/v1/users/login/route.ts

import { z } from "zod";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectToDatabase from "../../users/mongodb";
import { Faculty } from "../../users/db";

const FacultyLoginSchema = z.object({
  facultyNumber: z.string().min(3).max(100),
  password: z.string().min(6)
});

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    console.log("Received body:", body);

    const parsed = FacultyLoginSchema.safeParse(body);
    if (!parsed.success) {
      console.log("❌ Validation failed:", parsed.error);
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { facultyNumber, password } = parsed.data;

    const user = await Faculty.findOne({ facultyNumber });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Faculty login successful",
      user: {
        facultyNumber: user.facultyNumber,
        collegeId: user.collegeId
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
