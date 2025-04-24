import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar-faculty"
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
import { BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

import { Bell } from "lucide-react"
import { MessageSquare } from "lucide-react"
import CourseProgress from "./subjects-overlay.tsx/page"
import { Button } from "@/components/ui/button"



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

  export default function Subjects(){
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
                <BookOpen/> 
                <span>My Sybjects</span>
            </div>
            <div className="grid grid-cols-1 gap-5 m-5">


              <div className="grid grid-cols-2 gap-5 m-5">
              <div className="col-span-2 text-2xl font-bold">Sem-2</div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Physics</CardTitle>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">70%</div>  
                  </div>  
                  <Progress value={70} />
                </CardContent>
                <CardFooter className="grid grid-cols-2">
                  <div >
                  <div>Next Class</div>
                  <p>Today, 02:00 PM</p>
                  </div>
                  <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Update Progress</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <CourseProgress />
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Computer Science</CardTitle>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">95%</div>  
                  </div>
                  <Progress value={95} />
                </CardContent>
                <CardFooter className="grid grid-cols-2">
                  <div >
                  <div>Next Class</div>
                  <p>Today, 09:00 AM</p>
                  </div>
                  <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Update Progress</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <CourseProgress />
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardFooter>
              </Card>
              </div>

              <div className="grid grid-cols-2 gap-5 m-5">
              <div className="col-span-2 text-2xl font-bold">Sem-4</div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Mathematics</CardTitle>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">60%</div>  
                  </div>  
                  <Progress value={60} />
                </CardContent>
                <CardFooter className="grid grid-cols-2">
                  <div >
                  <div>Next Class</div>
                  <p>Today, 03:00 PM</p>
                  </div>
                  <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Update Progress</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <CourseProgress />
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Computer Science</CardTitle>
                </CardHeader>
                <CardContent >
                  <div className="grid grid-cols-2 m-3">   
                    <div>Course Progress</div>
                    <div className="justify-self-end">85%</div>  
                  </div>
                  <Progress value={85} />
                </CardContent>
                <CardFooter className="grid grid-cols-2">
                  <div >
                  <div>Next Class</div>
                  <p>Today, 11:00 AM</p>
                  </div>
                  <div className="justify-self-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Update Progress</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <CourseProgress />
                    </DialogContent>
                  </Dialog>
                  </div>
                </CardFooter>
              </Card>
              </div>
             

            </div>
          </main>
        </SidebarProvider>
        </div>
        </>
    )
  }