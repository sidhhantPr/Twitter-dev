import {
  TweetRepositary,
  LikeRepositary,
  CommentRepositary,
} from "../repositary/index.js";
class LikeService {
  constructor() {
    this.likeRepositary = new LikeRepositary();
    this.tweetRepositary = new TweetRepositary();
    this.commentRepositary = new CommentRepositary();
  }
  async toggleLike(
    modelId,
    modelType,
    userId //api/v1/likes/toggle?id=modelid&type=Tweet
  ) {
    if (modelType === "Tweet") {
      var likeable = await this.tweetRepositary.find(modelId);
    } else if (modelType === "Comment") {
      var likeable = await this.commentRepositary.get(modelId);
    } else {
      console.log("Unknown model type");
    }
    const exists = await this.likeRepositary.findByUserLikeable({
      likeable: modelId,
    });
    if (exists) {
      likeable.likes.pull(exists.id);

      await likeable.save();

      await exists.deleteOne();

      var isRemoved = true;
    } else {
      const newLike = await this.likeRepositary.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      isRemoved = false;
    }
    return isRemoved;
  }
}
export default LikeService;
