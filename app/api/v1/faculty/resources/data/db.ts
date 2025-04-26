import mongoose from "mongoose"

const resourceSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    fileUrl: String,
  },
  { timestamps: true }
)

export default mongoose.models.Resource || mongoose.model("Resource", resourceSchema)