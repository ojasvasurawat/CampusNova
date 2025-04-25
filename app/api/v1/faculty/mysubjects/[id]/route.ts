import { NextResponse } from "next/server"
import connectToDatabase from "../../../users/mongodb"
import { Subject } from "../../../users/db"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase()

  try {
    const { id } = params
    const { subjectProgress } = await request.json()

    const updated = await Subject.findByIdAndUpdate(
      id,
      { subjectProgress },
      { new: true }
    )

    if (!updated) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 })
    }

    return NextResponse.json(updated)

  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Error updating progress" }, { status: 500 })
  }
}
