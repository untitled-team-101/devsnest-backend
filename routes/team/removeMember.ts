import {Request, Response} from "express";

// /api/team/add PUT
const removeMember = async (req: Request, res: Response) => {
  const {userId, teamId} = req.body
  res.send({
    success: false
  })
}

export default removeMember;
