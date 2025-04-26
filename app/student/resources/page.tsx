import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebarStudent } from "@/components/app-sidebar-student"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folder } from "lucide-react";
import { FileText } from 'lucide-react';
import { Video } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react';


import AppTopbar from "@/components/topbar"



  export default function Resources(){
    return(
        <>
            <div className="flex w-full min-h-screen">
        <SidebarProvider>
          <AppSidebarStudent />
          <main className="flex-1">
           <AppTopbar />
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