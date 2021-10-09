import {Request, Response} from "express";
import User from "../../models/user";

// /api/team/add PUT
const getMembers = async (req: Request, res: Response) => {
  const {teamId} = req.body
  res.send({
    success: false
  })
}

export default getMembers;
