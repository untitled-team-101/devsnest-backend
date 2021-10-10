import { Response, NextFunction } from "express";
import { userInfo } from "os";
import Team from "../models/team";
import Roles from "../utils/roles";

const isAllowedToViewFeedbackForm = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const roles = req.user.roles;
  const isBatchLeaderOrAdmin = roles.find((role: String) => role === Roles.bl || role === Roles.admin);
  if (isBatchLeaderOrAdmin) {
    const teamId = req.query.teamid
    const team: any = await Team.findOne({ where: { teamId } });
    if (req.user.roles.find((role : String )=> role === Roles.admin) || team.batchLeader === req.user.userId) {
      next();
    } else {
      res.status(200).json({
        message: "you don't have batch leader perks of this team",
        success: false,
      });
    }
  } else {
    res.status(200).json({
      message: "Only batch leaders can update feedback form",
      success: false,
    });
  }
};

export default isAllowedToViewFeedbackForm;
