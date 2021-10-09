import {NextFunction, Request, Response} from "express";
// @ts-ignore
import jwt from "jsonwebtoken";
import User from "../models/user";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_token"

const checkSigned = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || ""
  try {
    const jwtToken = authHeader
      .replace("Bearer ", "")
      .replace("Bearer", "")
    const data = jwt.verify(jwtToken, ACCESS_TOKEN_SECRET)
    if(data)
      return next()
    res.status(401).send({
      status: 'error',
      message: "user not found"
    })
  } catch (err) {
    res.status(401).send({
      status: 'error',
      message: "token not valid"
    })
  }
}

export default checkSigned;
