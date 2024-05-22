import CrudRepositary from "./crud-repositary.js";
import Comment from "../models/comment.js";
class CommentRepositary extends CrudRepositary {
  constructor() {
    super(Comment);
  }
}
export default CommentRepositary;
