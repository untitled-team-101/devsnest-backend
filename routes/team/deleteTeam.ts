import {Request, Response} from "express";
import Team from "../../models/team";
// @ts-ignore
import crypto from 'crypto'

// DELETE /api/team/delete
const deleteTeam = async (req: Request, res: Response) => {
  const {teamId} = req.query
  await Team.destroy({where:{teamId}})
  return res.send({
    success: true,
  })
}

export default deleteTeam;
