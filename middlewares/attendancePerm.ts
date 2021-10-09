import User from "../models/user";
import { Request, Response, NextFunction } from "express";


const isAllowedToGiveAttendace = async (req : any, res : Response, next: NextFunction) => {
  const roles = req.user.roles
  const isVtlOrTl = roles.find((r : any) => r === "TL" || r === "VTL")
  if(isVtlOrTl){
    next();
  }else{
      res.status(200).json({
          message: "you can't update attendance",
          success: false
      })
  }
};

export default isAllowedToGiveAttendace;