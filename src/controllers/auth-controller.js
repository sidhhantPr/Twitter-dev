import UserService from "../services/user-service.js";

const userService = new UserService();
export async function signup(req, res) {
  try {
    const response = await userService.signup({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });
    return res.status(201).json({
      msg: "User created successfuly",
      success: true,
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      msg: "User should be unique",
      err: error,
      success: false,
    });
  }
}
export const login = async (req, res) => {
  try {
    const token = await userService.signin(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logged in",
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};
