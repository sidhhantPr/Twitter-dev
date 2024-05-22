import LikeService from "../services/like-service.js";

const likeService = new LikeService();
export const toogleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.query.userId
    );
    return res.status(201).json({
      success: true,
      msg: "Successfully toggle the tweet",
      response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Unsuccessful",
      err: error,
    });
  }
};
