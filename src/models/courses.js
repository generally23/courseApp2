import { Schema, model } from "mongoose";
import { sectionSchema } from "./sections";

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "A course must have a name"]
    },
    description: {
      type: String,
      required: [true, "A course must have a description"]
    },
    objectives: {
      type: String,
      required: [true, "A course must have objectives"]
    },
    requirements: {
      type: String,
      required: [true, "A course must have requirements"]
    },
    prerequisites: {
      type: String,
      required: [true, "A course must have a prerequisites"]
    },
    price: {
      type: Number,
      required: [true, "A course must have a price"]
    },
    sections: [sectionSchema]
  },
  { timestamps: true }
);

courseSchema.index("name");

export default model("Course", courseSchema);
