"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClassInfoContent() {
  const [subjectName, setSubjectName] = useState("");
  const [topicName, setTopicName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndName] = useState("");
  const [online, setOnline] = useState("");
  const [offline, setOffline] = useState("");
  const [link, setLink] = useState("");


  const handleSave = () => {
    
  }

  return (
    <div className="grid gap-4 py-4">
      
      <div className="grid gap-2">
        <Label htmlFor="name">Subject Name</Label>
        <Input
          id="subjectName"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder="Enter subject name"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Topic Name</Label>
        <Input
          id="topicName"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          placeholder="Enter topic name"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Class Start Time</Label>
        <Input
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Enter start time"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Class End Time</Label>
        <Input
          id="endTime"
          value={endTime}
          onChange={(e) => setEndName(e.target.value)}
          placeholder="Enter end time"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Class Type</Label>
        <div className="flex">
        <Input
          type="radio"
          id="online"
          value={online}
          onChange={(e) => setOnline(e.target.value)}
        />Online
        <Input
          type="radio"
          id="offline"
          value={offline}
          onChange={(e) => setOffline(e.target.value)}
        />Offline
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Upload Link</Label>
        <Input
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter link here"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}