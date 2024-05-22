import { Hashtag } from "../models/hashtags.js";

class HashtagRepositary {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log("error in create tag");
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log("error in bulkcreation of hashtag");
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log("error in get id");
    }
  }
  async update(tweetId, data) {
    try {
      const tag = await Hashtag.findByIdAndUpdate(tweetId, data, {
        new: true,
      });
      return tag;
    } catch (error) {
      console.log("error in update the tag");
    }
  }
  async destroy(id) {
    try {
      const tag = await Hashtag.findByIdAndDelete(id);
      return tag;
    } catch (error) {
      console.log(`error in deleteing tag by id`);
    }
  }
  async findByName(title) {
    try {
      const tags = await Hashtag.find({
        title: title,
      });
      return tags;
    } catch (error) {
      console.log(`error in find by name hash repo`);
    }
  }
}
export default HashtagRepositary;
