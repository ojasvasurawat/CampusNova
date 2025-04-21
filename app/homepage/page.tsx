import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
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

  export default function Homepage(){
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
            <div className="grid grid-cols-3 gap-5 m-5 ">
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Good Morning, Jhon Doe Student!</CardTitle>
                  <CardDescription>Friday, April 18, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>You have 2 classes scheduled today. Don't Forget to check your notification for recent updates.</p>
                </CardContent>
                {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <Clock/> Todays Timetable</CardTitle>
                  <CardDescription>Your schudeled class for today</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mathematics</CardTitle>
                      <CardDescription>
                        <p>09:00 AM - 10:00 AM</p>
                        <p>Room 101</p>
                        <p>Teacher: Dr. Smith</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Physics</CardTitle>
                      <CardDescription>
                        <p>11:00 AM - 12:00 PM</p>
                        <p>Room 102</p>
                        <p>Teacher: Dr. Ron</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Chemistry</CardTitle>
                      <CardDescription>
                        <p>01:00 PM - 02:00 PM</p>
                        <p>Room 101</p>
                        <p>Teacher: Dr. Johnson</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CardContent>
                <CardFooter>
                  {/* <p>Card Footer</p> */}
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <ScrollText/> Recent Notices</CardTitle>
                  <CardDescription>Latest announcements and assingments </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <Card>
                    <CardHeader>
                      <CardTitle>Submit Assingment 3 by Friday</CardTitle>
                      <CardDescription>
                        <p>Course: Computer Science</p>
                        <p>1 day ago</p> 
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Annual Sports Event Registration</CardTitle>
                      <CardDescription>
                        <p>Course: College-wise</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CardContent>
                <CardFooter>
                  {/* <p>Card Footer</p> */}
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex gap-3"> <ChartColumn/> My Attendance</CardTitle>
                  <CardDescription>your attendance record accross subjects</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <Card>
                    <CardHeader className="grid grid-cols-2">
                      <CardTitle>Mathematics</CardTitle>
                      <CardDescription className="justify-self-end">85%</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="grid grid-cols-2">
                      <CardTitle>Physics</CardTitle>
                      <CardDescription className="justify-self-end">75%</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="grid grid-cols-2">
                      <CardTitle>Chemistry</CardTitle>
                      <CardDescription className="justify-self-end">55%</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>View full attendance</CardTitle>
                      <CardDescription>

                      </CardDescription>
                    </CardHeader>
                  </Card>
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