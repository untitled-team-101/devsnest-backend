import {Request, Response} from "express";
import User from "../../models/user";
import {Op} from "sequelize";

// GET /api/user/list
const list = async (req: Request, res: Response) => {
  const {userId, name, email, role} = req.query;
  const userList: any[] = []

  if (Object.keys(req.query).length === 0) {
    const users = await User.findAll();
    users.map((user: any) => userList.push(user.dataValues))
  } else if (userId) {
    const user = await User.findOne({
      where: {
        userId: {
          [Op.like]: `%${userId}%`
        }
      }
    })
    if (user)
      userList.push(user)
  } else if (name) {
    const users = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });
    console.log(users)
    users.map((user: any) => userList.push(user.dataValues))
  } else if (email) {
    const users = await User.findAll({
      where: {
        email: {
          [Op.like]: `%${email}%`
        }
      }
    });
    users.map((user: any) => userList.push(user.dataValues))
  } else if (role) {
    const users = await User.findAll({
      where: {
        roles: {
          [Op.like]: `%${role}%`
        }
      }
    });
    users.map((user: any) => userList.push(user.dataValues))
  } else
    return res.send({
      message: "invalid query",
      success: true,
    })

  res.send({
    users: userList.map(user => {
      return {
        userId: user.userId,
        roles: user.roles,
        name: user.name,
        email: user.email,
      }
    }),
    success: true,
  });
};

export default list;
