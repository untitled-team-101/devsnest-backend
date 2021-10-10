import { Response } from "express";
import Team from "../../models/team";
import User from "../../models/user";
import Roles from "../../utils/roles";

const addBatchLeader = async (req: any, res: Response) => {
  const { userId, teamId } = req.body;

  const updatedData = await Team.update(
    { batchLeader: userId },
    { where: { teamId: teamId } }
  );

  console.log(updatedData);

  if (updatedData[0] > 0) {
    const user: any = await User.findOne({ where: { userId } });
    if (user.roles.indexOf(Roles.bl) === -1) {
      const newRoles = JSON.parse(user.roles);
      newRoles.push(Roles.bl);
      await User.update(
        { roles: JSON.stringify(newRoles) },
        { where: { userId: userId } }
      );
    }
    res.send({
      success: true,
      message: `${userId} is assigned as Batch Leader of ${teamId}`,
    });
  } else {
    res.send({
      success: false,
      message: "Team/User not found!",
    });
  }
};

export default addBatchLeader;
