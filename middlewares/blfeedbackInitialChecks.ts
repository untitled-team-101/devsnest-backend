import {NextFunction, Request, Response} from "express";

const blfeedbackInitialChecks = (req: Request, res: Response, next: NextFunction) => {

  const {
    coordination,
    tlAvailability,
    vtlAvailability,
    doubtTaker,
    rating,
    videoScrum,
    tlTha,
    vtlTha,
    remarks
  } = req.body;

  if(!coordination) return res.send({success: false, message: "Please provide valid stars!"});
  if(!tlAvailability) return res.send({success: false, message: "Please provide a valid option!"});
  if(!vtlAvailability) return res.send({success: false, message: "Please provide a valid option"});
  if(!doubtTaker) return res.send({success: false, message: "Please provide no. of doubt Takers"});
  if(!rating) return res.send({success: false, message: "Please provide rating!"});
  if(!videoScrum) return res.send({success: false, message: "Please provide a valid option"});
  if(!tlTha) return res.send({success: false, message: "Please provide TL THAs"});
  if(!vtlTha) return res.send({success: false, message: "Please provide VTL THAs"});
  if(!remarks) return res.send({success: false, message: "Please provide remarks"});
  next();

}
export default blfeedbackInitialChecks;