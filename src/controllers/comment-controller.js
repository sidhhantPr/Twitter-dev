import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export async function createComment(req, res) {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.query.userId,
      req.body.content
    );
    return res.status(201).json({
      success: true,
      data: response,
      msg: "Successfully created Comment",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      err: error,
      data: {},
      msg: "Unsuccesful",
    });
  }
}
