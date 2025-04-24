import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Globe, Settings } from "lucide-react"


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
import { ChartNoAxesColumnIncreasing } from "lucide-react"
import { Progress } from "@/components/ui/progress"

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



import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"

export default function SettingsPage() {
  return (
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

    <div className="m-5">
        <div className="flex m-5 text-2xl font-bold items-center gap-3 justify-start ">
            <Settings/>
            <span>Settings</span>
        </div>
    <div className="grid grid-cols-1 gap-5">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <p className="text-sm text-gray-500">Manage your notification preferences</p>
          <div className="space-y-4">
            <SettingToggle label="Email Notifications" description="Receive email updates" />
            <SettingToggle label="Push Notifications" description="Get instant updates" />
            <SettingToggle label="Assignment Reminders" description="Get reminded about due assignments" />
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Appearance</h2>
          <p className="text-sm text-gray-500">Customize your interface</p>
          <div>
            <SettingToggle label="Dark Mode" description="Switch between light and dark theme" />
          </div>
        </CardContent>
      </Card>

      
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Language & Region</h2>
          <p className="text-sm text-gray-500">Set your language and regional preferences</p>
          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Language</Label>
              <p className="text-sm text-gray-500">Currently set to English</p>
            </div>
            <Language/>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
    </main>
        </SidebarProvider>
        </div>
    </>
  )
}


const languages=[
    {value:"en",label:"English"},
    {value:"es",label:"Spanish"},
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "hi", label: "Hindi" },
    { value: "zh", label: "Chinese" },
    { value: "ja", label: "Japanese" },
]

function Language(){
    return(
        <Card>
            <CardContent>

                    <Select>
                        <SelectTrigger id="language" className="w-[200px]">
                            <SelectValue placeholder="Select a language"/>
                        </SelectTrigger>
                        <SelectContent>
                            {languages.map((lang)=>(
                                <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
            </CardContent>
        </Card>
    )
}

function SettingToggle({ label, description }: { label: string; description: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Label className="font-medium">{label}</Label>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch />
    </div>
  )
}