import {Request, Response} from "express"
import User from "../../models/user"
// @ts-ignore
import jwt from "jsonwebtoken"
// @ts-ignore
import bcrypt from "bcrypt"

const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_token"

const register = async (req: Request, res: Response) => {
  const {email, password, name} = req.body;

  const userId =  require('crypto').randomBytes(8).toString('hex')

  console.log(userId);

  const userData: any = await User.findOne({where: {email}});
  if (userData) {
    return res.status(200).json({
      message: "User already registered!",
      success: false
    });
  }

  const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);


  const savedUserData = await (await User.create({
    userId: userId,
    name: name,
    email: email,
    password: hashedPassword,
    role: JSON.stringify(["USER"])
  })).save()

  console.log(savedUserData)

  const token = jwt.sign({
      userId: userId,
      email: email,
      name: name,
      role: JSON.stringify(["USER"])
    },
    ACCESS_TOKEN_SECRET,
    {expiresIn: 7 * 24 * 60 * 60,}
  )

  console.log(token);
  res.send({
    userId: userId,
    token: token,
    role: JSON.stringify(["USER"]),
    email: email,
    name: name,
    expiresIn: 7 * 24 * 60 * 60,
    success: true
  })
}

export default register;
