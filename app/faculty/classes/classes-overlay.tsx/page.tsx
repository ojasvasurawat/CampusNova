"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner" 

export default function ClassInfoContent({
  onClassCreated,
}: {
  onClassCreated: (cls: any) => void
}) {
  const [subjectName, setSubjectName] = useState("")
  const [topicName, setTopicName] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [type, setType] = useState("")
  const [link, setLink] = useState("")

  const handleSave = async () => {
    try {
      const payload = {
        subjectName,
        topicName,
        startTime,
        endTime,
        type,
        link: type === "online" ? link : undefined, // use undefined instead of ""
      }
      

      const res = await fetch("/api/v1/faculty/classes/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to create class")

      const data = await res.json()
      console.log("Class created:", data)
      onClassCreated(data)

      toast.success("Class created successfully!") // optional
      // Optionally reset the form:
      setSubjectName("")
      setTopicName("")
      setStartTime("")
      setEndTime("")
      setType("")
      setLink("")

    } catch (error) {
      console.error("Error saving class:", error)
      toast.error("Something went wrong") // optional
    }
  }

  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label>Subject Name</Label>
        <Input
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder="Enter subject name"
        />
      </div>

      <div className="grid gap-2">
        <Label>Topic Name</Label>
        <Input
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          placeholder="Enter topic name"
        />
      </div>

      <div className="grid gap-2">
        <Label>Start Time</Label>
        <Input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label>End Time</Label>
        <Input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label>Class Type</Label>
        <RadioGroup value={type} onValueChange={setType} className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="online" id="r1" />
            <Label htmlFor="r1">Online</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="offline" id="r2" />
            <Label htmlFor="r2">Offline</Label>
          </div>
        </RadioGroup>
      </div>

      {type === "online" && (
        <div className="grid gap-2">
          <Label>Online Class Link</Label>
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter link here"
          />
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}
