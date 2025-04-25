"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function CourseProgress({ subjectId, onProgressUpdated }: { subjectId: string, onProgressUpdated?: () => void }) {
  const [progress, setProgress] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    const progressValue = Number(progress)
    if (isNaN(progressValue) || progressValue < 0 || progressValue > 100) {
      alert("Please enter a valid progress between 0 and 100.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/v1/faculty/mysubjects/${subjectId}`, {
        method: "PATCH", // or PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subjectProgress: progressValue }),
      })

      if (!response.ok) {
        throw new Error("Failed to update progress")
      }

      setProgress("")
      if (onProgressUpdated) onProgressUpdated()
      alert("Progress updated successfully!")

    } catch (error) {
      console.error(error)
      alert("Something went wrong while updating progress.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="progress">Progress</Label>
        <Input
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          placeholder="Progress in percentage"
          type="number"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  )
}
