import { Request, Response } from "express";
import User from "../../models/user";
// GET /api/user/list
const list = async (req: Request, res: Response) => {
  const { userid, name, email, role } = req.query;  
  if (Object.keys(req.query).length !== 0) {
    if (userid) {
      const users = await User.findOne({ where: { userid } });
      res.send({
        data: users,
        success: false,
      });
    } else if (name) {
      const users = await User.findAll({ where: { name } });
      res.send({
        data: users,
        success: false,
      });
    } else if (email) {
      const users = await User.findAll({ where: { email } });
      res.send({
        data: users,
        success: false,
      });
    // } else if (role) {
    //   const users = await User.findAll({ where: {roles: role} });
    //   res.send({
    //     data: users,
    //     success: false,
    //   });
    } else {
      res.status(200).send({
        messsage: "Invalid Query",
        success: false,
      });
    }
  } else {
    const users = await User.findAll();
    res.send({
      data: users,
      success: false,
    });
  }
};

export default list;
