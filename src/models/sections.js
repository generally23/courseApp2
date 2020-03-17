import { Schema } from "mongoose";
import { lectureSchema } from "./lectures";

const sectionSchema = new Schema(
  {
    name: {},
    duration: {},
    lectures: [lectureSchema]
  },
  { timestamps: true }
);

export { sectionSchema };
