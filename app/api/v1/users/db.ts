
import mongoose from "mongoose";

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

const SubjectSchema = new mongoose.Schema(
  {
    subjectName: { type: String, required: true },
    subjectProgress: { type: Number, default: 0 },
  },
  {
    timestamps: true, // <-- This adds createdAt and updatedAt fields
  }
);




// 👇 Prevent OverwriteModelError
export const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);
export const Faculty =
  mongoose.models.Faculty || mongoose.model("Faculty", FacultySchema);
export const Subject = 
  mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
