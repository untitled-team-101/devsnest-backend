import {NextFunction, Request, Response} from "express";

const scrumInitialChecks = (req:Request, res: Response, next:NextFunction) => {
  const {thaCount, thaLink, backlog, activity, rating, sawClass} = req.body;

  if(!thaCount) return res.send( {success: false, message:"Please provide you THA Count!"});
  if(!thaLink) return res.send( {success: false, message:"Please provide your THA Link!"});
  if(!backlog) return res.send( {success: false, message:"Please Provide Backlog Reason!"});
  if(!activity) return res.send({success: false, message:"Please provide Today's Activity!"});
  if(sawClass && !rating) return res.send({success: false, message:"Please provide rating!"});
  next();

}

export default scrumInitialChecks;