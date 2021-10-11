import { Request, Response } from "express";
import getDate from "../../utils/getDate";
import BLFeedback from "../../models/blfeedback";
import getWeek from "../../utils/getWeek";

// PUT /api/feedback/batch-leader
const edit = async (req: Request, res: Response) => {
  const {
    teamId,
    coordination,
    tlAvailability,
    vtlAvailability,
    doubtTaker,
    rating,
    videoScrum,
    tlTha,
    vtlTha,
    remarks,
  } = req.body;

  const week = getWeek();
  let updatableBlfeedbackData = {};

  if (typeof coordination === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, coordination };
  if (typeof tlAvailability === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, tlAvailability };
  if (typeof vtlAvailability === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, vtlAvailability };
  if (typeof doubtTaker === "string")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, doubtTaker };
  if (typeof rating === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, rating };
  if (typeof videoScrum === "boolean")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, videoScrum };
  if (typeof tlTha === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, tlTha };
  if (typeof vtlTha === "number")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, vtlTha };
  if (typeof remarks === "string")
    updatableBlfeedbackData = { ...updatableBlfeedbackData, remarks };

  const updatedBlfeedbackData = await BLFeedback.update(
    updatableBlfeedbackData,
    { where: { teamId: teamId, week: week } }
  );

  if (updatedBlfeedbackData[0] > 0)
    res.send({ success: true, message: "Updated Batch Leader Feedback Data!" });
  else
    res.send({
      success: false,
      message: "Fill your Batch Leader Feedback first!",
    });
};

export default edit;
