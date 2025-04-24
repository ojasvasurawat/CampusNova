"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileFormContent() {
  const [name, setName] = useState("John Doe")
  const [avatarUrl, setAvatarUrl] = useState("https://github.com/shadcn.png")

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarUrl(url)
    }
  }

  const handleSave = () => {
    
  }

  return (
    <div className="grid gap-4 py-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>

        <div>
          <Label htmlFor="avatar" className="mb-3">Change Avatar</Label>
          <Input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}
