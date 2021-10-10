import {Request, Response} from "express";
import getDate from "../../utils/getDate";
import BLFeedback from "../../models/blfeedback";

// GET /api/feedback/batch-leader
const add = async (req: Request, res: Response) => {
  const {teamId, week} = req.body;
  res.send({
    success:false
  })
}

export default add
