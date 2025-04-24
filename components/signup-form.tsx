
'use client'
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
import React, { useState, FormEvent } from "react"
import { redirect} from "next/navigation";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    enrollmentNumber: '',
    password: '',
    collegeId: '',
    courseName: '',
    yearOfAdmission: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.[0]?.message || 'Signup failed.');
      }

      const data = await response.json()
      alert(data.message); // Optional: replace with toast later
      console.log(data)
      
    } catch (error: any) {
      console.error(error)
      setError(error.message)
    } finally {
      redirect('/auth/login')
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Signup to your account</CardTitle>
          <CardDescription>Enter your details below</CardDescription>
        </CardHeader>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                    <Input
                      id="enrollmentNumber"
                      name="enrollmentNumber"
                      type="text"
                      placeholder="Enrollment Number"
                      value={formData.enrollmentNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="collegeId">College ID</Label>
                    <Input
                      id="collegeId"
                      name="collegeId"
                      type="text"
                      placeholder="College ID"
                      value={formData.collegeId}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="courseName">Course Name</Label>
                    <select
                      id="courseName"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="B.Sc">B.Sc</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="BBA">BBA</option>
                    </select>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="yearOfAdmission">Year of Admission</Label>
                    <select
                      id="yearOfAdmission"
                      name="yearOfAdmission"
                      value={formData.yearOfAdmission}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                    <Button variant="outline" className="w-full">
                      Sign Up with Google
                    </Button>
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
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
           <form >
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
