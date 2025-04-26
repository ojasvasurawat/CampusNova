"use client"
import { Pencil, Calendar, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import ProfileFormContent from "./profile-overlay.tsx/page"

import AppTopbar from "@/components/topbar"
import { useState } from "react"


type Notice = {
  _id: string;
  title: string;
  description: string;
  audience: string;
  createdAt: string;
}

export default function DashboardGrid() {

  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  return (

    <div className="flex w-full min-h-screen">
      <SidebarProvider>
        <AppSidebarFaculty />
        <main className="flex-1">
          <AppTopbar />
          <div className="p-6 space-y-6">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Card 1 - 2/3 width */}
              <div className="md:w-2/3 bg-white shadow rounded-lg p-6">

                <div className="grid grid-cols-3 items-center">
                  <Avatar className="w-20 h-20 ml-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <h2 className="ml-5 text-4xl text-black font-bold">John Doe</h2>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Pencil className="w-5 h-5" />
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md">
                      <ProfileFormContent />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="grid grid-cols-3 mt-10">
                  
                  <div>
                    <p className="text-gray-500">Enrollment</p>
                    <p className="font-semibold">2021CS1234</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - 1/3 width */}
              <div className="md:w-1/3 bg-white shadow rounded-lg p-6">
                {/* <p className="text-gray-500">Attendance</p>
                <p className="text-xl font-bold">85%</p>
                <p className="text-gray-500 mt-4">CGPA</p>
                <p className="text-xl font-bold">8.5</p>
                <p className="text-gray-500 mt-4">Subjects</p>
                <p className="text-xl font-bold">6</p> */}
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Card 3 - 2/3 width */}
              <div className="md:w-2/3 bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-start mb-4">
                  <Award />
                  <h2 className="ml-2 text-lg font-semibold">Achievements</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-purple-700">
                  <li>Dean's List 2023</li>
                  <li>First Prize in Coding Competition</li>
                  <li>Best Project Award</li>
                </ul>
              </div>

              {/* Card 4 - 1/3 width */}
              <div className="md:w-1/3 bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-start mb-4">
                  <Calendar />
                  <h2 className="ml-2 text-lg font-semibold">Upcoming Events</h2>
                </div>
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
              </div>
            </div>
          </div>

        </main>
      </SidebarProvider>
    </div>

  )
}
