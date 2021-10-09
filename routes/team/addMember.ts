import {Request, Response} from "express";
import User from "../../models/user";

// /api/team/add PUT
const addMember = async (req: Request, res: Response) => {
  const {teamId, userId} = req.body
  try {
    const updatedData = await User.update({teamId}, {
      where: {
        userId
      }
    })
    // TODO: check if 'teamId' is valid
    if (updatedData[0])
      return res.send({
        teamId,
        success: true,
        message: `${userId} added to ${teamId}`
      })
    else
      return res.send({
        success: false,
        message: `Cannot add user`
      })
  } catch (e) {
    return res.send({
      success: false,
      message: `Cannot update User`
    })
  }
}

export default addMember;
