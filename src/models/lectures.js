import { Schema } from "mongoose";

const lectureSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    transcripts: [
      {
        type: String,
        required: true
      }
    ],
    duration: {},
    sources: [
      {
        type: String,
        required: true
      }
    ]
  },
  { timestamps: true }
);

export { lectureSchema };
