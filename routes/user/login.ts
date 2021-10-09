import { Request, Response } from "express";
import User from "../../models/user";
// @ts-ignore
import bcrypt from "bcrypt";
// @ts-ignore
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "";

const login = async ( req: Request, res: Response) => {
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
        role: userData.role,
        name: userData.name,
        email: userData.email,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "7 days" }
    );

    let result = {
      name: userData.name,
      email: userData.email,
      token: `Bearer ${token}`,
      expiresIn: 7 * 24 * 60 * 60 * 1000,
    };
    return res.status(200).json({
      ...result,
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
