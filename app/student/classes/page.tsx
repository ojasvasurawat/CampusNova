"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {  AppSidebarStudent } from "@/components/app-sidebar-student"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react';
import { School } from 'lucide-react';


import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"
import AppTopbar from "@/components/topbar"
import { useEffect, useState } from "react"
import { toast } from "sonner"

type ClassItem = {
  _id: string
  subjectName: string
  topicName?: string
  startTime?: string
  endTime?: string
  type?: string
  link?: string
}

export default function Classes() {
  const [classes, setClasses] = useState<ClassItem[]>([])

  const fetchClasses = async () => {
    try {
      const res = await fetch("/api/v1/faculty/classes/data")
      const result = await res.json()

      console.log("Fetched classes:", result)

      if (Array.isArray(result.data)) {
        setClasses(result.data)
      } else {
        toast.error("Failed to load classes: Invalid data format")
      }
    } catch (error) {
      console.error("Failed to fetch classes", error)
      toast.error("Could not load classes")
    }
  }

  useEffect(() => {
    fetchClasses()
  }, [])

  






    return(
        <>
            <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
           <AppTopbar />
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <Video/> 
                <span>Today's Classes</span>
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">
            {Array.isArray(classes) && classes.length > 0 ? (
              classes.map((cls) => (
                <Card key={cls._id}>
                  <CardHeader className="grid grid-cols-2 mx-2">
                    <div className="flex items-center gap-3 justify-start">
                      {cls.type === "online" ? <Video /> : <School />}
                      <CardTitle className="text-xl font-bold">
                        {cls.topicName || "No Topic"}
                      </CardTitle>
                    </div>
                    <Button className="justify-self-end">{cls.subjectName}</Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 mx-2">
                    <div className="flex flex-col">
                      <div>
                        <strong>Start:</strong>{" "}
                        {cls.startTime
                          ? new Date(cls.startTime).toLocaleString()
                          : "N/A"}
                      </div>
                      <div>
                        <strong>End:</strong>{" "}
                        {cls.endTime
                          ? new Date(cls.endTime).toLocaleString()
                          : "N/A"}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <Button variant="outline" size="sm">{cls.type}</Button>
                      {cls.type === "online" && cls.link && (
                        <a
                          href={cls.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-blue-600 text-sm underline"
                        >
                          Join Link
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No classes available</p>
            )}
          </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }