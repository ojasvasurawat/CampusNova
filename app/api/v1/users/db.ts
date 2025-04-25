
import mongoose from "mongoose";
import { date } from "zod";

const StudentSchema = new mongoose.Schema({
  enrollmentNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  collegeId: { type: String, required: true },
  courseName: {
    type: String,
    enum: ["M.Tech", "B.Sc", "B.Tech", "BBA"],
  },
  yearOfAdmission: { type: String },
});

const FacultySchema = new mongoose.Schema({
  facultyNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  collegeId: { type: String, required: true },
});

const NoticesSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  audience:{
    type: String,
    enum: ["sem2", "sem4", "sem6", "sem8", "all"],
    required: true
  },
})

// 👇 Prevent OverwriteModelError
export const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);
export const Faculty =
  mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);
export const Notices = 
  mongoose.models.Notices || mongoose.model("Notices", NoticesSchema);
