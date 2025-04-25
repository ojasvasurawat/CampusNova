"use client"

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarStudent } from "@/components/app-sidebar-student"
import { Progress } from "@/components/ui/progress"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import AppTopbar from "@/components/topbar"

type Subject = {
  _id: string;
  subjectName: string;
  subjectProgress: number;
  facultyName: string;
};

export default function Subjects() {
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

  return (
    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarStudent />
        <main className="flex-1">
          <AppTopbar />
          <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
            <BookOpen />
            <span>My Subjects</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5">
            {subjects.map((subj) => (
              <Card key={subj._id}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{subj.subjectName}</CardTitle>
                  <CardDescription>{subj.facultyName || "Faculty TBD"}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 m-3">
                    <div>Course Progress</div>
                    <div className="justify-self-end">{subj.subjectProgress}%</div>
                  </div>
                  <Progress value={subj.subjectProgress} />
                </CardContent>
                <CardFooter className="grid grid-rows-2">
                  <div>Next Class</div>
                  <div>Today, 10:00 AM</div> {/* You can make this dynamic too */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
