import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema(
  {
    subjectName: { type: String, required: true },
    topicName: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    type: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    link: { type: String, default: "" },  // Ensure the link field is optional or defaulted to an empty string
  },
  {
    timestamps: true,
  }
);

export const Class = mongoose.models.Class || mongoose.model("Class", ClassSchema);
