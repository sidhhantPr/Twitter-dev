import express from "express";
import {
  createTweet,
  getAllTweet,
  getTweet,
} from "../../controllers/tweet-controller.js";
import { toogleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { login, signup } from "../../controllers/auth-controller.js";
// import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.post("/toggle", toogleLike);
router.post("/comment", createComment);
router.get("/tweets/:id", getTweet);
router.post("/signup", signup);
router.post("/login", login);
router.get("/getTweets", getAllTweet);

export default router;
