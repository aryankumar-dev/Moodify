import mongoose, { Schema } from "mongoose";

const savedSchema = new Schema(
  {
    songname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    songid: {
      type: Number,
      required: true,
    },
    createdBy: {
       type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: "https://via.placeholder.com/200x200.png",
        localPath: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export const SavedSchema = mongoose.model("SavedSchema", savedSchema);