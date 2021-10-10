import {Request, Response} from "express"

// GET /api/user/list
const list = async (req:Request, res:Response) => {
  const {search} = req.query
  res.send({
    success: false
  })
}

export default list;
