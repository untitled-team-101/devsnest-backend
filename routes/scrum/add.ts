import {Request, Response} from "express";
import Scrum from "../../models/scrum";
import getDate from "../../utils/getDate"

const edit = async (req: Request, res: Response) => {
  const {userId, thaCount, thaLink, backlog, activity, rating, sawClass} = req.body;

  const date = getDate();

  const scrumData = await Scrum.findOne({where: {userId, date}});

  if(scrumData){
    res.send({success: false, message: "Scrum data already added! You can only edit it!"})
  }
  else{
    const savedScrumData = await (await Scrum.create({
      userId: userId,
      date:date,
      attendance: false,
      thaCount: thaCount,
      thaLink: thaLink,
      backlog: backlog,
      activity: activity,
      rating: rating,
      sawClass: sawClass
    })).save()
    res.send({success: true, message: "Scrum data added!"});
  }





}

export default edit;
