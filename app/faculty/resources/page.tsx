import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar-faculty"
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
import { Folder, Plus } from "lucide-react";
import { FileText } from 'lucide-react';
import { Video } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"
import ResourcesUploadContent from "./resources-overlay.tsx/page"

import AppTopbar from "@/components/topbar"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"


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

export default function Resources() {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <AppTopbar />
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
              <Folder />
              <span>Learning  Resources</span>
              <div className="place-items-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className=""> <Upload /> Upload</Button>
                  </DialogTrigger>
          
                  <DialogContent className="sm:max-w-md">
                    <ResourcesUploadContent />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">
              <Card>
                <CardHeader className="grid grid-cols-2 mx-2">
                  <div className="flex">
                    <FileText />
                    <CardTitle className="text-xl font-bold">Mathematics Formulae Sheet</CardTitle>
                  </div>
                  <Button className="justify-self-end">Mathematics</Button>
                </CardHeader>
                <CardContent className="grid grid-cols-2 mx-2">
                  <div>
                    <div>Size: 2.5 MB</div>
                    <div>Added: 2024-04-15</div>
                  </div>
                  <Button className="justify-self-end"> <Download /> Download</Button>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader className="grid grid-cols-2 mx-2">
                  <div className="flex">
                    <Video />
                    <CardTitle className="text-xl font-bold">Physics Lab Video</CardTitle>
                  </div>
                  <Button className="justify-self-end">Physics</Button>
                </CardHeader>
                <CardContent className="grid grid-cols-2 mx-2">
                  <div>
                    <div>Size: 45 MB</div>
                    <div>Added: 2024-04-14</div>
                  </div>
                  <Button className="justify-self-end"> <Download /> Download</Button>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>
              <Card>
                <CardHeader className="grid grid-cols-2 mx-2">
                  <div className="flex">
                    <Video />
                    <CardTitle className="text-xl font-bold">Programming Guidelines</CardTitle>
                  </div>
                  <Button className="justify-self-end">Computer Science</Button>
                </CardHeader>
                <CardContent className="grid grid-cols-2 mx-2">
                  <div>
                    <div>Size: 1.5 MB</div>
                    <div>Added: 2024-04-13</div>
                  </div>
                  <Button className="justify-self-end"> <Download /> Download</Button>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>


            </div>
          </main>
        </SidebarProvider>
      </div>
    </>
  )
}