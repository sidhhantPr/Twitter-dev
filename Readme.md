This project is a simple Twitter built using Node.js and Express. The API allows users to sign up, log in, create tweets, like tweets, comment on tweets, and fetch tweets. Images are uploaded and stored in AWS S3.

Features :-
User Authentication (Signup and Login)
Create a tweet
Like/Unlike a tweet
Comment on a tweet
Fetch a single tweet by ID
Fetch all tweets
Image upload to AWS S3
Requirements
Node.js
NPM (Node Package Manager)
AWS S3 account (for image storage)
MongoDB (for storing user and tweet data)

Installation:-
->Clone the repository:
git clone https://github.com/your-repo/twitter-clone-api.git
cd twitter-clone-api
->Install dependencies:
npm install
->Set up environment variables:

Create a .env file in the root directory and add the following variables:
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
S3_BUCKET_NAME=your_s3_bucket_name
S3_REGION=your_s3_region

Start the server:-
npm start

Image Upload to AWS S3
When creating a tweet, if an image file is provided, it will be uploaded to an AWS S3 bucket. Ensure your AWS credentials and S3 bucket details are correctly set up in the .env file.

Error Handling
All endpoints return appropriate HTTP status codes and error messages in case of invalid requests or server errors.
