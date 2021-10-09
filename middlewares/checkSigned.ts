import {NextFunction, Request, Response} from "express";
// @ts-ignore
import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_token"

const checkSigned = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || ""
  try {
    const jwtToken = authHeader
      .replace("Bearer ", "")
      .replace("Bearer", "")

    jwt.verify(jwtToken, ACCESS_TOKEN_SECRET, function (err: any, decoded: any) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "token not valid"
        })
      }
      // @ts-ignore
      req.user = {
        userId: decoded.userId || 1,
        roles: JSON.parse(decoded.role || "['USER']"),
        email: decoded.email || "email@mail.com",
        name: decoded.name || "User Name"
      }
      return next()
    })
  } catch (err) {
    res.status(401).send({
      success: false,
      message: "token not valid"
    })
  }
}

export default checkSigned;
