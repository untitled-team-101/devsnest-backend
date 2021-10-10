import {Response} from "express";
import Team from "../../models/team";

const addBatchLeader = async (req: any, res: Response) => {

  const {userId, teamId} = req.body;

  const updatedData = await Team.update({batchLeader: userId}, {where: {teamId:teamId}});

  console.log(updatedData)

  if(updatedData[0] > 0){
    res.send({
      success: true,
      message: `${userId} is assigned as Batch Leader of ${teamId}`
    })
  }
  else {
    res.send({
      success:false,
      message: "Team/User not found!"
    })
  }
}

export default addBatchLeader;