"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
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
import { Clock } from "lucide-react";
import { ScrollText } from 'lucide-react';
import { ChartColumn } from 'lucide-react';

import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"

import AppTopbar from "@/components/topbar"
import { useState, useEffect } from "react"
import { Progress } from "@radix-ui/react-progress"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Video, School } from "lucide-react"

type Notice = {
  _id: string;
  title: string;
  description: string;
  audience: string;
  createdAt: string;
}

type Subject = {
  _id: string;
  subjectName: string;
  subjectProgress: number;
  facultyName: string;
};

type ClassItem = {
  _id: string
  subjectName: string
  topicName?: string
  startTime?: string
  endTime?: string
  type?: string
  link?: string
}


export default function Homepage() {




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


  const [subjects, setSubjects] = useState<Subject[]>([])

  const fetchSubjects = async () => {
    try {
      const res = await fetch("/api/v1/faculty/mysubjects") // or faculty/mysubjects if you don’t have student-specific endpoint
      const data = await res.json()
      setSubjects(data)
    } catch (error) {
      console.error("Failed to fetch subjects:", error)
    }
  }

  useEffect(() => {
    fetchSubjects()

    // Refresh data when window regains focus
    const handleFocus = () => fetchSubjects()
    window.addEventListener("focus", handleFocus)
    return () => window.removeEventListener("focus", handleFocus)
  }, [])



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





const today = new Date();

  return (
    <>
      <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarFaculty />
          <main className="flex-1">
            <AppTopbar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 ">
              <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Hello, Jhon Doe Student!</CardTitle>
                  <CardDescription>{today.toLocaleDateString('en-US', {
                    weekday: 'long',  // Day of the week
                    year: 'numeric',  // Year in numeric format
                    month: 'long',    // Full month name
                    day: 'numeric',   // Day of the month
                  })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You have {classes.length} classes scheduled today. Don't Forget to check your notification for recent updates.</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <Clock /> Todays Timetable</CardTitle>
                  <CardDescription>Your schudeled class for today</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  {Array.isArray(classes) && classes.length > 0 ? (
                    classes.map((cls) => (
                      <Card key={cls._id}>
                        <CardHeader className="">
                          <div className="">
                          
                            <CardTitle className="">
                              {cls.subjectName || "No Topic"}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="">
                          <div className="flex flex-col">
                            <div className="mb-2">
                              {" "}
                              {cls.startTime
                                ? new Date(cls.startTime).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true,
                                })
                                : "N/A"}
                                {"-"}
                              {cls.endTime
                                ? new Date(cls.endTime).toLocaleTimeString([], {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true,
                                })
                                : "N/A"}
                            </div>
                          </div>
                          <div className="">
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
                </CardContent>
                <CardFooter>
                  {/* <p>Card Footer</p> */}
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <ScrollText /> Recent Notices</CardTitle>
                  <CardDescription>Latest announcements and assingments </CardDescription>
                </CardHeader>
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
                    <Card key={notice._id} className="mx-5">
                      <CardHeader>
                        <CardTitle>{notice.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{notice.description}</p>
                      </CardContent>
                    </Card>
                  ))
                )}
                <CardFooter>
                  {/* <p>Card Footer</p> */}
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <ChartColumn /> Course Progress</CardTitle>
                  <CardDescription>course compelition accross subjects</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  {subjects.map((subj) => (
                    <Card key={subj._id}>
                      <CardHeader className="grid grid-cols-2">
                        <div className=" ">{subj.subjectName}</div>
                        <div className="justify-self-end">{subj.subjectProgress}%</div>
                      </CardHeader>
                      
                    </Card>
                  ))}
                </CardContent>
                <CardFooter>
                  {/* <p>Card Footer</p> */}
                </CardFooter>
              </Card>

            </div>
          </main>
        </SidebarProvider>
      </div>
    </>
  )
}