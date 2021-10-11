import { Response } from "express";
import Team from "../../models/team";

const viewBatchLeader = async (req: any, res: Response) => {
  const { teamId } = req.query;

  const data: any = await Team.findOne({ where: { teamId } });

  if (!data)
    return res.send({
      success: false,
      message: "No team found!",
    });
  if (data.batchLeader)
    return res.send({
      success: true,
      bl: data.batchLeader,
      message: "batch leader successfully fetched!",
    });
  res.send({
    success: true,
    message: "No batch leader is assigned for this team!",
  });
};

export default viewBatchLeader;
