import mongoose from "mongoose";

const StudentSchema= new mongoose.Schema({
    enrollmentNumber:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    collegeId:{type:String,required:true},
    courseName:{type:String,enum:["M.Tech","B.Sc","B.Tech","BBA"]},
    yearOfAdmission:{type:String}
});

const Student=mongoose.model("Student",StudentSchema);

const FacultySchema=new mongoose.Schema({
    facultyNumber:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    collegeId:{type:String,required:true},
});

const Faculty=mongoose.model("Faculty",FacultySchema);


const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO_URL);

}

export{connectDB,Student,Faculty}