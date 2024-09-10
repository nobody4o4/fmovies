import User from "../model/user.model.js";
import { generateToken } from "../utils/jwt.utils.js";

class UserController {
  register = async (req, res, next) => {
    try {
      console.log(req);
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });

      return res.status(201).send({ user });
    } catch (err) {
      next(err);
      console.log(err);
    }
  };

  login = async (req, res, next) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      if (!user) {
        return res.status(400).send({ message: "Invalid email/password" });
      } else {
        const token = generateToken(user.email, user._id);
        console.log("token", token, "login Success");
        return res.status(201).send({ user, token });
      }
    } catch (err) {
      next(err);
      console.log(err);
    }
  };
}

export const userController = new UserController();
