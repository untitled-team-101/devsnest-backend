import {Request, Response} from "express"
import { STRING } from "sequelize";
import User from "../../models/user"

// PUT /api/user/role
const role = async (req: any, res:Response) => {
  console.log(req.body);
  const {userId, roles, action} = req.body;
  const user : any = await User.findOne({where:{userId}})
  if(action === "ADD"){
  if(JSON.parse(user.roles).indexOf(roles) > -1){
    res.status(200).json({
      message: "role already exist",
      success: false
    })
  }else{
    const newRoles = JSON.parse(user.roles);
    newRoles.push(roles)
    await User.update({roles : JSON.stringify(newRoles)},{where:{userId : userId}})
    res.status(200).json({
      message : "role updated successfully",
      success: true
    })
  }}
  if(action === "REMOVE"){
    if(JSON.parse(user.roles).indexOf(roles) === -1){
      res.status(200).json({
        message: "role doesn't already exist",
        success: false
      })
    }else{
      var newRoles = JSON.parse(user.roles);
      newRoles = newRoles.find((role : String) => role !== roles)
      await User.update({roles : JSON.stringify(newRoles)},{where:{userId : userId}})
      res.status(200).json({
        message : "role removed successfully",
        success: true
      })
    }}
  }

export default role;
