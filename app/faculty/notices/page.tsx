"use client"

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import { Bell } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import NoticeForm from "./notice-overlay/page"
import NoticeBox from "./notice-box/page"
import AppTopbar from "@/components/topbar"
import {
  Card, CardContent,
  CardHeader, CardTitle
} from "@/components/ui/card"

type Notice = {
  _id: string;
  title: string;
  description: string;
  audience: string;
  createdAt: string;
}

export default function Notices() {
  const [notices, setNotices] = useState<Notice[]>([])

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("/api/v1/notices")
        const data = await response.json()
        setNotices(data)
      } catch (err) {
        console.error("Failed to fetch notices:", err)
      }
    }

    fetchNotices()
  }, [])

  const handleNewNotice = (notice: Notice) => {
    setNotices((prev) => [notice, ...prev])
  }

  return (
    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarFaculty />
        <main className="flex-1">
          <AppTopbar />
          <div className="flex m-5 text-2xl font-bold items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell />
              <span>Notices & Announcements</span>
            </div>


          </div>
          <div className="m-5"> 
            <Dialog>
              <DialogTrigger asChild>
                <button><NoticeBox /></button>
              </DialogTrigger>
              <DialogContent className="max-w-screen-md">
                <NoticeForm onNoticePosted={handleNewNotice} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 gap-5 m-5">
            {notices.map((notice) => (
              <Card key={notice._id}>
                <CardHeader>
                  <CardTitle>{notice.title}</CardTitle>
                  {/* <CardDescription>{new Date(notice.createdAt).toLocaleString()}</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <p>{notice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
