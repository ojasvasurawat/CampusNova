import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your details below to login to your account
          </CardDescription>
        </CardHeader>


        <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
            </TabsList>

        <TabsContent value="student">
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="enrolment">Enrolment</Label>
                <Input
                  id="enrolment"
                  type="text"
                  placeholder="Enrolment Number"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder="Password" required />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="college">CollegeID</Label>
                </div>
                <Input id="college" type="text" placeholder="CollegeID" required />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="course">Course Name</Label>
                </div>
                <select name="course" id="course">
                <option value="Select Course">Select Course</option>
  <option value="MTech">M.Tech</option>
  <option value="BSc">B.Sc.</option>
  <option value="BTech">B.Tech</option>
  <option value="BBA">BBA</option>
            </select>
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="year">Year of Admission</Label>
                </div>
                <select name="year" id="year">
  <option value="Select Year">Select Year</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
  <option value="2025">2025</option>
            </select>
              </div>  

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
                <Button variant="outline" className="w-full">
                  SignUp with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <a href="/auth/login" className="underline underline-offset-4">
                Sign In
              </a>
            </div>
          </form>
        </CardContent>
        </TabsContent>

        <TabsContent value="faculty">
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="facultyenrol">Faculty Number</Label>
                <Input
                  id="faculyenrol"
                  type="text"
                  placeholder="Faculty Number"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" placeholder=" Enter Password" required />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="college">CollegeID</Label>
                </div>
                <Input id="college" type="text" placeholder="CollegeID" required />
              </div>


              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
                <Button variant="outline" className="w-full">
                  SignUp with Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
               Have an account?{" "}
              <a href="/auth/login" className="underline underline-offset-4">
                Sign In
              </a>
            </div>
          </form>
        </CardContent>
        </TabsContent>

        </Tabs>
      </Card>
    </div>
  )
}
