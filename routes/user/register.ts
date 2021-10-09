import {Request, Response} from "express";
import User from "../../models/user";
// @ts-ignore
import jwt from "jsonwebtoken";
// @ts-ignore
import bcrypt from "bcrypt"

const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_token"

const register = async (req: Request, res: Response) => {
  const {email, password, name} = req.body;

  const userData: any = await User.findOne({where: {email}});
  if (userData) {
    return res.status(406).json({
      message: "User already registered!",
      success: false
    });
  }

  const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);

  const savedUserData = await (await User.create({
    name: name,
    email: email,
    password: hashedPassword,
    role: JSON.stringify(["USER"])
  })).save()

  const token = jwt.sign({
      userId: 1234,
      email: email,
      name: name,
      role: JSON.stringify(["USER"])
    },
    ACCESS_TOKEN_SECRET,
    {expiresIn: "7 days"})

  res.send({
    userId: 1234,
    token: token,
    role: JSON.stringify(["USER"]),
    email: email,
    name: name,
    success: true
  })
}


export default register;