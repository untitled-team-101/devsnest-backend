import { Request, Response } from "express";
import User from "../../models/user";
// @ts-ignore
import bcrypt from "bcrypt";
// @ts-ignore
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_token";

// POST /api.user/login
const login = async (req: Request, res: Response) => {
  let { email, password } = req.body;
  const userData: any = await User.findOne({ where: { email } });
  if (!userData) {
    return res.status(200).json({
      message: "Username is not found. Invalid login credentials.",
      success: false,
    });
  }
  let isMatch = await bcrypt.compare(password, userData.password);
  if (isMatch) {
    let token = jwt.sign(
      {
        userId: userData.userId,
        roles: JSON.parse(userData.roles),
        name: userData.name,
        email: userData.email,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: 7 * 24 * 60 * 60 }
    );

    return res.status(200).json({
      userId: userData.userId,
      name: userData.name,
      email: userData.email,
      token: token,
      roles: JSON.parse(userData.roles),
      expiresIn: 7 * 24 * 60 * 60,
      message: "Hurray! You are now logged in.",
      success: true,
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false,
    });
  }
};
export default login;
