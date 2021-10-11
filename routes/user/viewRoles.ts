import { Response } from "express";
import User from "../../models/user";

// GET /api/user/view
const viewRoles = async (req: any, res: Response) => {
  const { userId } = req.query;

  const data: any = await User.findOne({ where: { userId: userId } });

  if (data) {
    res.send({
      success: true,
      roles: data.roles,
      message: "Successfully fetched roles!",
    });
  } else {
    res.send({
      success: false,
      message: "User Not Found!",
    });
  }
};

export default viewRoles;
