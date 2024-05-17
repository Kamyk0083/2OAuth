import mongoose, { Schema, Document } from "mongoose";

interface ITemporaryData extends Document {
  email: string;
  code: number;
  createdAt: Date;
}

const TemporaryDataSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600,
  },
});

export default mongoose.models.TemporaryData ||
  mongoose.model<ITemporaryData>("TemporaryData", TemporaryDataSchema);
