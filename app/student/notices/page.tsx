"use client"

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarStudent } from "@/components/app-sidebar-student"
import { Bell } from "lucide-react"
import AppTopbar from "@/components/topbar"
import {
  Card, CardContent, CardDescription,
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("/api/v1/notices")
        const data = await response.json()
        setNotices(data)
      } catch (err) {
        console.error("Failed to fetch notices:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotices()
  }, [])

  return (
    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarStudent />
        <main className="flex-1">
          <AppTopbar />

          <div className="flex m-5 text-2xl font-bold items-center gap-3">
            <Bell />
            <span>Notices & Announcements</span>
          </div>

          <div className="grid grid-cols-1 gap-5 m-5">
            {loading ? (
              <p>Loading...</p>
            ) : notices.length === 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>No notices yet</CardTitle>
                  <CardDescription>All notices will appear here.</CardDescription>
                </CardHeader>
              </Card>
            ) : (
              notices.map((notice) => (
                <Card key={notice._id}>
                  <CardHeader>
                    <CardTitle>{notice.title}</CardTitle>
                    {/* <CardDescription>{new Date(notice.createdAt).toLocaleString()}</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <p>{notice.description}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
