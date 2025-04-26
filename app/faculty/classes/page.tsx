"use client"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Video, School } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import ClassInfoContent from "./classes-overlay.tsx/page"
import AppTopbar from "@/components/topbar"

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

  const handleNewClass = (newClass: ClassItem) => {
    setClasses((prev) => [newClass, ...prev])
  }

  return (
    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarFaculty />
        <main className="flex-1">
          <AppTopbar />

          <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
            <Video />
            <span>Today's Classes</span>
          </div>

          <div className="m-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create Class</Button>
              </DialogTrigger>
              <DialogContent className="max-w-screen-md">
                <ClassInfoContent onClassCreated={handleNewClass} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 m-5">
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
  )
}

