import { Request, Response } from "express";
import BLFeedback from "../../models/blfeedback";

const view = async (req: any, res: Response) => {
  const teamId = req.query.teamid;
  const date = req.query.date;
  console.log(req.query);
  
  const data: any = await BLFeedback.findOne({ where: { teamId, date } });
  if (data) {
    res.status(200).send({teamId: teamId,
        coordination: data.coordination,
        tlAvailability: data.tlAvailability,
        vtlAvailability: data.vtlAvailability,
        doubtTaker: data.doubtTaker,
        rating: data.rating,
        videoScrum: data.videoScrum,
        tlTha: data.tlTha,
        vtlTha: data.vtlTha,
        remarks:data.remarks,
        date: data.date
    });
  } else {
    res.status(200).json({
      message: 'there is nothing',
      success: false,
    });
  }
};

export default view;
