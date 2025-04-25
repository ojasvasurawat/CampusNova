import mongoose from "mongoose";


const NoticesSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      audience: {
        type: String,
        enum: ["sem2", "sem4", "sem6", "sem8", "all"],
        required: true,
      },
    },
    { timestamps: true } // <-- This adds createdAt and updatedAt automatically
  );
  


export const AllNotices = 
  mongoose.models.Notices || mongoose.model("Notices", NoticesSchema);