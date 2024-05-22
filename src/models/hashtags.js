import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});

export const Hashtag = mongoose.model("Hashtag", hashtagSchema);
