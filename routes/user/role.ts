import {Request, Response} from "express"
import User from "../../models/user"
import roleActions from '../../utils/role-action'

// PUT /api/user/role
const role = async (req: any, res: Response) => {
  console.log(req.body);
  const {userId, roles, action} = req.body;
  const user: any = await User.findOne({where: {userId}})
  if (user) {
    switch (action) {
      case roleActions.add:
        if (JSON.parse(user.roles).indexOf(roles) > -1) {
          res.status(200).json({
            message: "role already exist",
            success: false
          })
        } else {
          const newRoles = JSON.parse(user.roles);
          newRoles.push(roles)
          await User.update({roles: JSON.stringify(newRoles)}, {where: {userId: userId}})
          res.status(200).json({
            message: "role added successfully",
            success: true
          })
        }
        break
      case roleActions.remove:
        if (JSON.parse(user.roles).indexOf(roles) === -1) {
          res.status(200).json({
            message: "role doesn't exist",
            success: false
          })
        } else {
          let newRoles = JSON.parse(user.roles);
          newRoles = newRoles.find((role: String) => role !== roles)
          await User.update({roles: JSON.stringify(newRoles)}, {where: {userId: userId}})
          res.status(200).json({
            message: "role removed successfully",
            success: true
          })
        }
        break
      default:
        res.status(200).json({
          message: "invalid action",
          success: false
        })
    }
  } else
    res.status(200).json({
      message: "invalid userid",
      success: false
    })
}

export default role;
