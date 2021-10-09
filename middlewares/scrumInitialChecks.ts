import {NextFunction, Request, Response} from "express";

const scrumInitialChecks = (req:Request, res: Response, next:NextFunction) => {
  const {date, attendance, thaCount, thaLink, backlog, activity, rating, sawClass} = req.body;
  if(thaCount){
    if(thaLink){
      if(backlog){
        if(activity){
          if(sawClass){
            if(rating) next()
            else res.status(406).send("Please provide rating!");
          }
          else next();
        }
        else res.status(406).send("Please provide Today's Activity!");
      }
      else res.status(406).send("Please Provide Backlog Reason!");
    }
    else res.status(406).send("Please provide your THA Link!");
  }
  else res.status(406).send("Please provide you THA Count!");
}

export default scrumInitialChecks;