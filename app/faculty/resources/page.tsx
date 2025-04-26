"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebarFaculty } from "@/components/app-sidebar-faculty"
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
import { useEffect, useState } from "react"




export default function Resources() {
  const [resources, setResources] = useState<any[]>([])

  const fetchResources = async () => {
    const res = await fetch("/api/v1/resources",{
      method: "GET"
    })
    const data = await res.json()
    setResources(data)
  }

  useEffect(() => {
    fetchResources()
  }, [])



  return (
    <>
      <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarFaculty />
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
                    <ResourcesUploadContent onUploadSuccess={fetchResources} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>


        <div className="grid gap-4">
        {resources.map((resource) => (
          <Card key={resource._id}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
              <p>Uploaded: {new Date(resource.createdAt).toLocaleDateString()}</p>
              <a
                href={resource.fileUrl}
                download
                className="inline-flex items-center mt-2 text-blue-600 hover:underline"
              >
                <Download className="w-4 h-4 mr-2" /> Download
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

          </main>
        </SidebarProvider>
      </div>
    </>
  )
}