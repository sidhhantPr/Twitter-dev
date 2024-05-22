import CrudRepositary from "./crud-repositary.js";
import { User } from "../models/user.js";
class UserRepositary extends CrudRepositary {
  constructor() {
    super(User);
  }
  async findBy(data) {
    try {
      const response = await User.findOne({ email: data });
      return response;
    } catch (error) {
      console.log("error in userrepo");
    }
  }
}
export default UserRepositary;
