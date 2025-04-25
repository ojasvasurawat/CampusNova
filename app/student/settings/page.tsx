import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Globe, Settings } from "lucide-react"


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarStudent } from "@/components/app-sidebar-student"
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
import AppTopbar from "@/components/topbar"

export default function SettingsPage() {
  return (
    <>
    
    <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
           
           <AppTopbar />

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