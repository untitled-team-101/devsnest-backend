import { Request, Response } from "express";
import Team from "../../models/team";
// @ts-ignore
import crypto from "crypto";

// POST /api/team/create
const createTeam = async (req: Request, res: Response) => {
  const { name, batchLeader } = req.body;
  if (!name)
    return res.send({
      success: false,
      message: `Provide a name`,
    });

  const teamId = crypto.randomBytes(6).toString("hex");
  let teamData: any = {
    teamId,
    name,
  };

  if (batchLeader)
    teamData = {
      ...teamData,
      batchLeader,
    };

  try {
    const createTeam = await (await Team.create(teamData)).save();
    if (createTeam)
      return res.send({
        teamId,
        success: true,
        message: `Team ${name} created`,
      });
    else
      return res.send({
        success: false,
        message: `Cannot create Team`,
      });
  } catch (e) {
    return res.send({
      success: false,
      message: `Cannot create Team`,
    });
  }
};

export default createTeam;
