import {Request, Response} from "express";

// PUT /api/team/add
const removeMember = async (req: Request, res: Response) => {
  const {userId, teamId} = req.body
  // teamId optional
  res.send({
    success: false
  })
}

export default removeMember;
