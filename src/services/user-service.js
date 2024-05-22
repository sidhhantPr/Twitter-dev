import { UserRepositary } from "../repositary/index.js";
class UserService {
  constructor() {
    this.userRepositary = new UserRepositary();
  }
  async signup(data) {
    try {
      const user = await this.userRepositary.create(data);
      return user;
    } catch (error) {
      console.log("error in user services");
    }
  }
  async getUserByEmail(email) {
    try {
      const user = await this.userRepositary.findBy(email);
      return user;
    } catch (error) {
      console.log("error in the user service ");
    }
  }
  async signin(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw {
          message: "no user found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "incorrect password",
        };
      }
      const token = user.genJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
