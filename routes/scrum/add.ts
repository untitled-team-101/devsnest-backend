import {Request, Response} from "express";
import Scrum from "../../models/scrum";
import getDate from "../../utils/getDate"

const add = async (req: Request, res: Response) => {
  const {userId, thaCount, thaLink, backlog, activity, rating, sawClass} = req.body;

  const date = getDate();

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

  res.send({
    userId:userId,
    date: date,
    attendance: false,
    thaCount: thaCount,
    thaLink: thaLink,
    backlog: backlog,
    activity: activity,
    rating: rating,
    sawClass: sawClass
  })

}

export default add;