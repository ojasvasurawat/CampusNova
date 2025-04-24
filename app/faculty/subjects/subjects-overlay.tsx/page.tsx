"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CourseProgress() {
  const [progress, setProgress] = useState("")


  const handleSave = () => {
    
  }

  return (
    <div className="grid gap-4 py-4">
        


      <div className="grid gap-2">
        <Label htmlFor="name">Progress</Label>
        <Input
          id="progress"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          placeholder="Progress in percentage"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}
