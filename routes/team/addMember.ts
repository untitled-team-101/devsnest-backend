import e, {Request, Response} from "express";
import User from "../../models/user";
import Team from "../../models/team";

// PUT /api/team/add
const addMember = async (req: Request, res: Response) => {
  const {teamId, userId} = req.body
  try {
    const updatedData = await User.update({teamId}, {
      where: {
        userId
      }
    })
    // TODO: check if 'teamId' is valid
    const team = await Team.findOne({where :{teamId}})
    if(team){
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
      })}
      else{
        res.status(200).json({
          message: "team does't exist",
          success: false
        })
      }
  } catch (e) {
    return res.send({
      success: false,
      message: `Cannot update User`
    })
  }
}

export default addMember;
