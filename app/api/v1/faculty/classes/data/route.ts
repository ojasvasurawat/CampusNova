import { z } from "zod";
import { NextResponse } from "next/server";
import connectToDatabase from "../../../users/mongodb";
import { Class } from "./db";

// ✅ Conditional validation: link is required and must be a URL for online, optional/empty for offline
const ClassRules = z
  .object({
    subjectName: z.string().min(3).max(100),
    topicName: z.string().min(3).max(200),
    startTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    endTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    type: z.enum(["online", "offline"]),
    link: z.string().optional(),
  })
  .refine((data) => {
    if (data.type === "online") {
      return data.link && /^https?:\/\/.+\..+/.test(data.link);
    }
    return true; // offline can have empty or missing link
  }, {
    message: "Link must be a valid URL for online classes",
    path: ["link"],
  });


// POST - Create a class
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const parsed = ClassRules.safeParse(body);
    if (!parsed.success) {
      console.log("Zod validation failed:", parsed.error.errors);
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { subjectName, topicName, startTime, endTime, type, link } = parsed.data;

    const newClass = new Class({
      subjectName,
      topicName,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      type,
      link: type === "online" ? link : "", // store empty string for offline
    });

    const savedClass = await newClass.save();

    return NextResponse.json(
      {
        success: true,
        data: savedClass,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET - Fetch all classes
export async function GET() {
  try {
    await connectToDatabase();
    const allClasses = await Class.find().sort({ startTime: 1 });
    return NextResponse.json({
      success: true,
      data: allClasses,
    });
  } catch (error: any) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
