"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";




export default function NoticeForm({ onNoticePosted }: { onNoticePosted: (notice: any) => void }) {


  const [newNotice, setNewNotice] = useState({
    title: "",
    desc: "",
    audience: "all", // default must be valid
  });

  const handleAnnounce = async () => {

    const { title, desc, audience } = newNotice;
    if (!title.trim() || !desc.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const noticeToPost = {
      title,
      description: desc,
      audience,
    };


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
      onNoticePosted(postedNotice);


      setNewNotice({ title: "", desc: "", audience: "all" });
    } catch (error) {
      console.error(error)
      alert("An error occurred while posting the notice.")
    }
  }

  return (
    <div className="space-y-4">


      <div className="m-2">
        <Label htmlFor="title" className="m-2">Title</Label>
        <Input id="title" value={newNotice.title} onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
          placeholder="Notice title" />
      </div>

      <div className="m-2">
        <Label htmlFor="desc" className="m-2">Description</Label>
        <Textarea
          id="desc"
          value={newNotice.desc}
          onChange={(e) => setNewNotice({ ...newNotice, desc: e.target.value })}
          placeholder="Write the full notice here..."
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={handleAnnounce}>Announce</Button>
      </div>
    </div>
  );
}  
