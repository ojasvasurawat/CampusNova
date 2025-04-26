"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"

interface UploadProps {
    onUploadSuccess: () => void
  }

export default function ResourcesUploadContent({ onUploadSuccess }: { onUploadSuccess?: () => void }) {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  
    const handleUpload = async () => {
        console.log(file)
        if (!file || !title || !description) return alert("All fields required")
      const formData = new FormData()
      formData.append("file", file)
      formData.append("title", title)
      formData.append("description", description)
  
      await fetch("/api/v1/resources", {
        method: "POST",
        body: formData,
      })
  
      setFile(null)
      setTitle("")
      setDescription("")
      onUploadSuccess?.()  // notify parent to refetch
    }

    
    return (
        <div className="grid gap-4 py-4">
            <form onSubmit={handleUpload}>
            <div className="flex items-center gap-4">
                <div>
                    <Label htmlFor="resources" className="mb-3">Upload File</Label>
                    <Input id="resources" type="file" accept="/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </div>

            <div className="flex justify-end">
                <Button type="submit">Save</Button>
            </div>
            </form>
        </div>
    )
}