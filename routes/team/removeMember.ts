import { Request, Response } from "express";
import User from "../../models/user";

// PUT /api/team/add
const removeMember = async (req: Request, res: Response) => {
  // verify by teamId
  const { userId, teamId } = req.body;
  const user: any = await User.findOne({ where: { userId } });
  if (user.teamId === teamId) {
    await User.update({ teamId: "" }, { where: { userId } });
    res.send({
      success: true,
    });
  } else {
    res.status(200).send({
      message: "User is not in the team",
      success: false,
    });
  }
};

export default removeMember;
