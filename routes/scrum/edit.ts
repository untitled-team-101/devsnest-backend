import {Request, Response} from "express";
import Scrum from "../../models/scrum";
import getDate from "../../utils/getDate"

// PUT /api/scrum/set
const edit = async (req: Request, res: Response) => {
  const {userId, thaCount, thaLink, backlog, activity, rating, sawClass} = req.body;

  const date = getDate();
  let updatableData = {};

  if (typeof thaCount === "number") updatableData = {...updatableData, thaCount};
  if (typeof thaLink === "number") updatableData = {...updatableData, thaLink};
  if (typeof backlog === "string") updatableData = {...updatableData, backlog};
  if (typeof activity === "string") updatableData = {...updatableData, activity};
  if (typeof sawClass === "boolean") updatableData = {...updatableData, sawClass};
  if (typeof rating === "number") updatableData = {...updatableData, rating};

  const updatedData = await Scrum.update(updatableData,
    {where: {userId: userId, date: date}});

  if (updatedData[0] > 0)
    res.send({success: true, message: "Updated Scrum Data!"})
  else
    res.send({success: false, message: "Fill your Scrum Data first!"})

}

export default edit;
