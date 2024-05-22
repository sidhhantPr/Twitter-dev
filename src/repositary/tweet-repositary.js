import { Tweet } from "../models/tweet.js";
import CrudRepositary from "./crud-repositary.js";
class TweetRepositary extends CrudRepositary {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("error in create tweet");
    }
  }
  async update(data, tweetId) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(
        tweetId,
        { $push: { hashtags: data } },
        { new: true }
      );
      return tweet;
    } catch (error) {
      console.log("error in update the tweet");
    }
  }
  async find(modelId) {
    try {
      const result = await Tweet.findById(modelId).populate({
        path: "likes",
      });
      return result;
    } catch (error) {
      console.log("error in getpopulate tweet repo");
    }
  }
  async getWithComments(tweetid) {
    try {
      const tweetComm = await Tweet.findById(tweetid)
        .populate({
          path: "comments",
          populate: {
            path: "comments",
            populate: {
              path: "comments",
            },
          },
        })
        .lean();
      return tweetComm;
    } catch (error) {
      console.log("error in getWIthComments Tweet repo");
    }
  }
  async getAll() {
    try {
      const result = await Tweet.find({}).populate({
        path: "hashtags",
        path: "comments",
      });
      return result;
    } catch (error) {
      console.log("err in the tweet repo getAll");
    }
  }
}
export default TweetRepositary;
