import { Request, Response } from "express";
import Team from "../../models/team";
import { Op } from "sequelize";

// GET /api/team/list
const listTeams = async (req: Request, res: Response) => {
  const { teamId, name } = req.query;
  const teamList: any[] = [];

  if (Object.keys(req.query).length === 0) {
    const teams = await Team.findAll();
    teams.map((team: any) => teamList.push(team.dataValues));
  } else if (teamId) {
    const team = await Team.findOne({
      where: {
        teamId: {
          [Op.like]: `%${teamId}%`,
        },
      },
    });
    if (team) teamList.push(team);
  } else if (name) {
    const teams = await Team.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    teams.map((team: any) => teamList.push(team.dataValues));
  } else
    return res.send({
      message: "invalid query",
      success: true,
    });

  res.send({
    teams: teamList.map((team: any) => {
      return {
        teamId: team.teamId,
        name: team.name,
        batchLeader: team.batchLeader,
      };
    }),
    success: true,
  });
};

export default listTeams;
