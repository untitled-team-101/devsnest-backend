import {Request, Response} from "express"

const verify = async (req:Request, res:Response) => {
  res.send({
    success: true,
    message: "Login Credentials are valid"
  })
}
export default verify;
