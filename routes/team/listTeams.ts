import {Request, Response} from "express";
import Team from "../../models/team";
// @ts-ignore
import crypto from 'crypto'

// GET /api/team/list
const listTeams = async (req: Request, res: Response) => {
  const {searchString} = req.query // optional
  res.send({
    success: false
  })
}

export default listTeams;
