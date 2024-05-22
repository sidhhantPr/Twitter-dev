import JWT from "passport-jwt";
import { User } from "../models/user.js";
const JwtStrategy = JWT.Strategy;

const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "1h",
};

export const passportAuth = (passport) => {
  try {
    passport.use(
      new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = User.findById(jwt_payload.id);
        if (!user) {
          done(null, false);
        } else done(null, user);
      })
    );
  } catch (error) {
    console.log("error in the jwt middleware");
  }
};
