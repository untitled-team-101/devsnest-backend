import {Request, Response} from "express";
import getDate from "../../utils/getDate";
import BLFeedback from "../../models/blfeedback";

const add = async (req: Request, res: Response) => {

  const {
    teamId,
    coordination,
    tlAvailability,
    vtlAvailability,
    doubtTakers,
    rating,
    videoScrum,
    tlTha,
    vtlTha,
    remarks
  } = req.body;

  const date = getDate();

  const blfeedbackData = await BLFeedback.findOne({where: {teamId, date}});

  console.log(blfeedbackData);

  if(blfeedbackData){
    res.send({success: false, message: "Batch Leader Feedback already added! You can only edit it!"})
  }
  else {
    await (await BLFeedback.create({
      teamId: teamId,
      coordination: coordination,
      tlAvailability: tlAvailability,
      vtlAvailability: vtlAvailability,
      doubtTakers: doubtTakers,
      rating: rating,
      videoScrum: videoScrum,
      tlTha: tlTha,
      vtlTha: vtlTha,
      remarks:remarks,
      date:date
    })).save()
    res.send({success: true, message: "Batch Leader Feedback data added!"});
  }
}

export default add



