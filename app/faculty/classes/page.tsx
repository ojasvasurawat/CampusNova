import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"


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
import { Pencil } from 'lucide-react';
import { School } from 'lucide-react';


import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"

import ClassInfoContent from "./classes-overlay.tsx/page"

import AppTopbar from "@/components/topbar"


const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

export default function Classes() {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarFaculty />
          <main className="flex-1">
            <AppTopbar />
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
              <Video />
              <span>Today's Classes</span>
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">

              <div className="grid grid-cols-2 gap-5 m-5">
                <div className=" text-2xl font-bold">Sem-2</div>
                <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Create Class</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <ClassInfoContent />
                    </DialogContent>
                  </Dialog>
                </div>
                <Card>
                  <CardHeader className="grid grid-cols-2 mx-2">
                    <div className="flex items-center gap-3 justify-start">
                      <School />
                      <CardTitle className="text-xl font-bold">Quantum mechanics</CardTitle>
                    </div>
                    <Button className="justify-self-end">Physics</Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 mx-2">
                    <div>
                      <div>Start: 10:30 AM</div>
                      <div>End: 11:30 AM</div>
                    </div>
                    <Button className="justify-self-end"> Offline</Button>
                  </CardContent>
                  {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
                </Card>
                <Card>
                  <CardHeader className="grid grid-cols-2 mx-2">
                    <div className="flex items-center gap-3 justify-start">
                      <Video />
                      <CardTitle className="text-xl font-bold"> Data Structures and Algorithms</CardTitle>
                    </div>
                    <Button className="justify-self-end">Computer Science</Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 mx-2">
                    <div>
                      <div>Start: 01:00 PM</div>
                      <div>End: 02:00 PM</div>
                    </div>
                    <Button className="justify-self-end"> Online</Button>
                  </CardContent>
                  {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
                </Card>
              </div>


              <div className="grid grid-cols-2 gap-5 m-5">
                <div className=" text-2xl font-bold">Sem-4</div>
                <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Create Class</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <ClassInfoContent />
                    </DialogContent>
                  </Dialog>
                </div>
                <Card>
                  <CardHeader className="grid grid-cols-2 mx-2">
                    <div className="flex items-center gap-3 justify-start">
                      <School />
                      <CardTitle className="text-xl font-bold">Differential equation </CardTitle>
                    </div>
                    <Button className="justify-self-end">Mathematics</Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 mx-2">
                    <div>
                      <div>Start: 09:00 AM</div>
                      <div>End: 10:00 AM</div>
                    </div>
                    <Button className="justify-self-end">Offline</Button>
                  </CardContent>
                  {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
                </Card>

                <Card>
                  <CardHeader className="grid grid-cols-2 mx-2">
                    <div className="flex items-center gap-3 justify-start">
                      <Video />
                      <CardTitle className="text-xl font-bold">Python</CardTitle>
                    </div>
                    <Button className="justify-self-end">Computer Science</Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 mx-2">
                    <div>
                      <div>Start: 01:00 PM</div>
                      <div>End: 02:00 PM</div>
                    </div>
                    <Button className="justify-self-end"> Online</Button>
                  </CardContent>
                  {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
                </Card>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </div>
    </>
  )
}