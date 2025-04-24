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
import { Folder } from "lucide-react";
import { FileText } from 'lucide-react';
import { Video } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react';

import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"



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

  export default function Resources(){
    return(
        <>
            <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <div className="flex gap-10 m-5">
              <SidebarTrigger />
              <Input type="text" placeholder="Search..." />
              <DropdownMenu>
                <DropdownMenuTrigger><Bell/></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Card >
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                        <Switch />
                      </div> */}
                      <div>
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                          >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {notification.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter>
                      <Button className="w-full">
                        <Check /> Mark all as read
                      </Button>
                    </CardFooter> */}
                  </Card>

                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger><MessageSquare/></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Card >
                    <CardHeader>
                      <CardTitle>Messages</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                        <Switch />
                      </div> */}
                      <div>
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                          >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1 ">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <p className="text-sm font-medium leading-none">
                                {notification.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {notification.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    {/* <CardFooter>
                      <Button className="w-full">
                        <Check /> Mark all as read
                      </Button>
                    </CardFooter> */}
                  </Card>

                </DropdownMenuContent>
              </DropdownMenu>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start">
                <Folder/> 
                <span>Learning  Resources</span>
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
                  <Button className="justify-self-end"> <Download/> Download</Button>
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
                  <Button className="justify-self-end"> <Download/> Download</Button>
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
                  <Button className="justify-self-end"> <Download/> Download</Button>
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