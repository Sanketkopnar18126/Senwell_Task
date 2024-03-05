import mongoose, { Schema } from "mongoose";

const EmplySchema = new Schema(
  {
    emplyId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const Employ = mongoose.model("employ", EmplySchema);
