import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
userSchema.pre("save", function (next) {
  const SALT = bcrypt.genSalt(10);
  const encryptedPassword = bcrypt.hashSync(this.password, 10);
  this.password = encryptedPassword;
  next();
});
userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};
userSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email, name: this.name }, "1h", {
    expiresIn: "1d",
  });
};
export const User = mongoose.model("User", userSchema);
