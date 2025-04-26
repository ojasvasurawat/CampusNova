"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function CreateClasss({ onSubjectPosted }: { onSubjectPosted: (subject: any) => void }) {


    const [newSubject, setNewSubject] = useState({
        subjectName: "",
        subjectProgress: "",
    });


    const handleSave = async () => {
        const { subjectName, subjectProgress } = newSubject;

        if (!subjectName.trim()) {
            alert("Please enter the subject name.");
            return;
        }

        const subjectToPost = {
            subjectName,
            subjectProgress: Number(subjectProgress || 0), // default to 0 if empty
        };

        try {
            const response = await fetch("/api/v1/faculty/mysubjects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(subjectToPost),
            });

            if (!response.ok) {
                throw new Error("Failed to add subject");
            }

            const postedSubject = await response.json();
            onSubjectPosted(postedSubject);
            setNewSubject({ subjectName: "", subjectProgress: "" });

        } catch (error) {
            console.error(error);
            alert("Error posting subject");
        }
    };


    return (
        <div className="grid gap-4 py-4">



            <div className="grid gap-2">
                <Label htmlFor="name">Subject Name</Label>
                <Input
                    id="subjectName"
                    value={newSubject.subjectName}
                    onChange={(e) => setNewSubject({ ...newSubject, subjectName: e.target.value })}
                    placeholder="Subject Name"
                />

            </div>

            <div className="flex justify-end">
                <Button onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}
