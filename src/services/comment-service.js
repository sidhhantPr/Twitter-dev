import { CommentRepositary, TweetRepositary } from "../repositary/index.js";

class CommentService {
  constructor() {
    this.commentRepositary = new CommentRepositary();
    this.tweetRepositary = new TweetRepositary();
  }
  async create(modelId, modelType, userId, content) {
    if (modelType === "Tweet") {
      var commentable = await this.tweetRepositary.get(modelId);
    } else if (modelType === "Comment") {
      var commentable = await this.commentRepositary.get(modelId);
    } else {
      console.log("unknown model type");
    }
    const comment = await this.commentRepositary.create({
      content: content,
      userId: userId,
      onModel: modelType,
      commentable: modelId,
      comments: [],
    });
    commentable.comments.push(comment);
    await commentable.save();
    return comment;
  }
}
export default CommentService;
