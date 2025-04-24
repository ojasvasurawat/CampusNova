"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";

export default function NoticeForm() {

const [notices, setNotices] = useState<{ id: string; title: string; desc: string; audience:string; date: string }[]>([])

const [newNotice, setNewNotice] = useState({
  id: "",
  title: "",
  desc: "",
  audience: "all classes",
  date: "",
})

const handleAnnounce = async () => {
    if (!newNotice.title || !newNotice.desc) {
      alert("Please fill in both the title and description.")
      return
    }

    const noticeToPost = {
      ...newNotice,
      date: new Date().toISOString(),
    }

    try {
      const response = await fetch("/api/v1/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticeToPost),
      })

      if (!response.ok) {
        throw new Error("Failed to post notice")
      }

      const postedNotice = await response.json()
      setNotices((prevNotices) => [...prevNotices, postedNotice])
      setNewNotice({ id: "", title: "", desc: "", audience : "", date: "" })
    } catch (error) {
      console.error(error)
      alert("An error occurred while posting the notice.")
    }
  }

  return ( 
        <div className="space-y-4">


          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={newNotice.title} onChange={(e) => setNewNotice({...newNotice,title: e.target.value})}
            placeholder="Notice title" />
          </div>

          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              value={newNotice.desc}
              onChange={(e) => setNewNotice({...newNotice, desc: e.target.value })}
              placeholder="Write the full notice here..."
            />
          </div>

          <div>
            <Label>Target Audience</Label>
            <Select value={newNotice.audience} onValueChange={(e)=>{setNewNotice({...newNotice, audience: e.toString()})}}>
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
          </div>


      <div className="flex justify-end">
        <Button onClick={handleAnnounce}>Announce</Button>
      </div>
    </div>
  );
}  
