import {Request, Response} from "express";
import User from "../../models/user";

// GET /api/team/add
const getMembers = async (req: Request, res: Response) => {
  const {teamId, idOnly} = req.query
  if(!teamId)
    return res.send({
      success: false,
      message: "Provide the team id"
    })
  const members = await User.findAll({where:{teamId}})
  const memberList = members.map((member:any) => {
    const memberData = member?.dataValues
    if(idOnly)
      return memberData?.userId
    return {
      userId: memberData.userId,
      name: memberData.name,
      email: memberData.email,
      roles: JSON.parse(memberData.roles),
    }
  })
  return res.send({
    success: true,
    members: memberList
  })
}

export default getMembers;
