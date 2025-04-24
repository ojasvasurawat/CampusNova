"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"

export default function ProfileFormContent() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
  }

  const handleSave = () => {
    
  }

  return (
    <div className="grid gap-4 py-4">
      <div className="flex items-center gap-4">
        

        <div>
          <Label htmlFor="resources" className="mb-3">Upload File</Label>
          <Input id="resources" type="file" accept="/*" onChange={handleFileChange}  />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Description</Label>
        <Input
          id="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter description"
        />
      </div>
            <div className="grid gap-2">
            <Label>Target Audience</Label>
            <button className="text-sm p-2 border border-black border-2 rounded-lg text-muted-foreground">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="classA">Class A</SelectItem>
                <SelectItem value="classB">Class B</SelectItem>
                <SelectItem value="classC">Class C</SelectItem>
              </SelectContent>
            </Select>
          </button>
          </div>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}