'use client'

import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import AppTopbar from "@/components/topbar"
import CreateClasss from "./subjects-overlay.tsx/page2"
import CourseProgress from "./subjects-overlay.tsx/page"

type Subject = {
  _id: string
  subjectName: string
  subjectProgress: number
}

export default function Subject() {
  const [subject, setSubject] = useState<Subject[]>([])

  const fetchSubject = async () => {
    try {
      const response = await fetch("/api/v1/faculty/mysubjects")
      const data = await response.json()
      setSubject(data)
    } catch (err) {
      console.error("Failed to fetch subjects:", err)
    }
  }

  useEffect(() => {
    fetchSubject()
  }, [])

  const handleNewSubject = (subject: Subject) => {
    setSubject((prev) => [subject, ...prev])
  }

  return (
    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarFaculty />
        <main className="flex-1">
          <AppTopbar />

          <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
            <BookOpen />
            <span>My Subjects</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-5">
            <div className="text-2xl font-bold">Subjects</div>
            <div className="justify-self-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add Subject</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <CreateClasss onSubjectPosted={handleNewSubject} />
                </DialogContent>
              </Dialog>
            </div>

            {subject.map((subj) => (
              <Card key={subj._id} className="m-2">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{subj.subjectName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 m-3">
                    <div>Course Progress</div>
                    <div className="justify-self-end">{subj.subjectProgress}%</div>
                  </div>
                  <Progress value={subj.subjectProgress} />
                </CardContent>
                <CardFooter className="grid">
                  {/* <div>
                    <div>Next Class</div>
                    <p>Today, 02:00 PM</p>
                  </div> */}
                  <div className="justify-self-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Update Progress</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <CourseProgress subjectId={subj._id} onProgressUpdated={fetchSubject} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          
        </main>
      </SidebarProvider>
    </div>
  )
}
