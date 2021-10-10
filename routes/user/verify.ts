import {Request, Response} from "express"

// ALL /api/user/verify
const verify = async (req:any, res:Response) => {
  res.send({
    ...req.user,
    success: true,
    message: "Login Credentials are valid"
  })
}

export default verify;
