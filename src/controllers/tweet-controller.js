import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-config.js";
const tweetService = new TweetService();
const singleUploader = upload.single("image");
export async function createTweet(req, res) {
  try {
    singleUploader(req, res, async function (err) {
      if (err)
        return res.status(500).json({
          err: err,
        });
      const data = req.body;
      data.images = req.file.location;
      const response = await tweetService.create(data);
      return res.status(201).json({
        msg: "successfully created a new tweet",
        success: true,
        data: response,
        err: {},
      });
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      data: {},
      err: { error },
    });
  }
}
export async function getTweet(req, res) {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(201).json({
      msg: "successfully fetched tweet",
      success: true,
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(403).json({
      success: false,
      data: {},
      err: { error },
    });
  }
}
export async function getAllTweet(req, res) {
  try {
    const response = await tweetService.tweetRepositary.getAll();
    return res.status(200).json({
      msg: "get all the tweet",
      response,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "err",
      err: error,
      success: false,
    });
  }
}
