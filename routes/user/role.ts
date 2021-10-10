import {Request, Response} from "express"

// PUT /api/user/role
const role = async (req:Request, res:Response) => {
  const {userID, roles} = req.body()
  res.send({
    success: false
  })
}

export default role;
