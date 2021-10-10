import {Request, Response} from "express";
import Team from "../../models/team";

// GET /api/team/list
const listTeams = async (req: Request, res: Response) => {
  // const {searchString} = req.query // optional

  const teamData = await Team.findAll();

  res.send({
    message: teamData,
    success: false
  })
}

export default listTeams;
