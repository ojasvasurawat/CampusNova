"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"


import { useState, useEffect } from "react"



type Notice = {
  _id: string;
  title: string;
  description: string;
  audience: string;
  createdAt: string;
}

export default function AppTopbar() {
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
    <div className="flex gap-10 m-5">
      <SidebarTrigger />
      <Input type="text" placeholder="Search..." />
      <DropdownMenu>
        <DropdownMenuTrigger><Bell /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <Card >
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">

              <div>
                {loading ? (
                  <p>Loading...</p>
                ) : notices.length === 0 ? (
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div>No notices yet</div>

                  </div>
                ) : (notices.map((notice) => (
                  <div
                    key={notice._id}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notice.title}
                      </p>
                    </div>
                  </div>
                )))}
              </div>
            </CardContent>
          </Card>

        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer"><MessageSquare /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <Card >
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Join a room to get updates.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                <a href="https://chat-app-frontend-psi-six.vercel.app/" className="p-4 bg-black text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black hover:border-2 cursor-pointer">

                  Join a room

                </a>
              </div>
            </CardContent>
          </Card>

        </DropdownMenuContent>
      </DropdownMenu>
      <Avatar >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
     