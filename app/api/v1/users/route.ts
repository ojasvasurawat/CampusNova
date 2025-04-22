import jwt from "jsonwebtoken";
import {z} from "zod";
import bcrypt from "bcrypt";
import {Student,Faculty} from "./db.ts";
import mongoose from "mongoose";
import {NextRequest,NextResponse} from "next/server"

const JWT_SECRET=process.env.JWT_SECRET;


const StudentRules=z.object(
    {
    enrollmentNumber:z.string().min(3).max(100),
    password:z.string(),
    collegeId:z.string().min(10)
    courseName:z.array().nonempty(),
    yearOfAdmission:z.string()
    }
)

router.post('/signup/student',StudentRules,async(req:NextRequest,res:NextResponse)=>{
    const{enrollmentNumber,password,collegeId,courseName,yearOfAdmission}=req.body;
    const hashedPassword=await bcrypt.hash(password,5);

    const student =new Student ({
        enrollmentNumber,
        password:hashedPassword,
        collegeId,
        courseName,
        yearOfAdmission,
    });
    await student.save();

    return res.json({message:"student signup done"})

})