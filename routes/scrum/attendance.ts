import { Request, Response } from "express";
import Scrum from "../../models/scrum";
import getDate from "../../utils/getDate";

const attendance = async (req: Request, res: Response) => {
  let { userId, attendance } = req.body;
  const date = getDate();
  const data: any = await Scrum.findOne({
    where: { userId: userId, date: date },
  });

  if (data) {
    await Scrum.update(
      { attendance: attendance },
      { where: { userId: userId, date: date } }
    );
    
    res.status(200).json({
      message: "attedance updated",
      success: true,
    });
  } else {
    res.status(200).json({
      message: "user needs to fill the scrumsheet",
      success: false,
    });
    console.log('ERR');
    
  }
};

export default attendance;
