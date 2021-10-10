import {Request, Response} from "express";
import Team from "../../models/team";
// @ts-ignore
import crypto from 'crypto'

// DELETE /api/team/delete
const deleteTeam = async (req: Request, res: Response) => {
  const {teamId} = req.query
  return res.send({
    success: false,
  })
}

export default deleteTeam;
