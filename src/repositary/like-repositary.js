import Like from "../models/like.js";
import CrudRepositary from "./crud-repositary.js";

class LikeRepositary extends CrudRepositary {
  constructor() {
    super(Like);
  }
  async findByUserLikeable(data) {
    try {
      const like = await Like.findOne(data);
      return like;
    } catch (error) {
      console.log("error in like repositary");
    }
  }
}
export default LikeRepositary;
