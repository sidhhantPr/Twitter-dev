import HashtagRepositary from "../repositary/hashtag-repositary.js";
import TweetRepositary from "../repositary/tweet-repositary.js";

class TweetService {
  constructor() {
    this.tweetRepositary = new TweetRepositary();
    this.hashtagRepositary = new HashtagRepositary();
  }
  async create(data) {
    const content = data.content;

    let tags = content.match(/#[a-zA-Z0-9_]+/g);
    if (tags != null)
      tags = tags.map((tags) => tags.substring(1).toLowerCase());

    const tweet = await this.tweetRepositary.create(data);

    let alreadyPresent = await this.hashtagRepositary.findByName(tags);

    alreadyPresent.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });

    alreadyPresent = alreadyPresent.map((tag) => tag.title);

    if (tags != null) {
      var newTag = tags.filter((tag) => !alreadyPresent.includes(tag));

      newTag = newTag.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });
      let tweetHashTag = [].concat(
        ...newTag.map((tags) => tags.tweets.map((hashtag) => hashtag))
      );
      await this.hashtagRepositary.bulkCreate(newTag);
      await this.tweetRepositary.update(tweetHashTag, tweet.id);
    }

    return tweet;
  }
  async get(tweetId) {
    try {
      const tweet = await this.tweetRepositary.getWithComments(tweetId);
      return tweet;
    } catch (error) {
      console.log("error in the tweet service get");
    }
  }
}
export default TweetService;
