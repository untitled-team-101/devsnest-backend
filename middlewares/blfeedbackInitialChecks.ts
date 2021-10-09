import {NextFunction, Request, Response} from "express";

const blfeedbackInitialChecks = (req: Request, res: Response, next: NextFunction) => {

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
    remarks
  } = req.body;

  if (coordination) {
    if (tlAvailability) {
      if (vtlAvailability) {
        if (doubtTaker) {
          if (rating) {
            if (videoScrum) {
              if (tlTha) {
                if (vtlTha) {
                  if (remarks) {
                    next();
                  } else res.send({success: false, message: "Please provide remarks"});
                } else res.send({success: false, message: "Please provide VTL THAs"});
              } else res.send({success: false, message: "Please provide TL THAs"});
            } else res.send({success: false, message: "Please provide a valid option"});
          } else res.send({success: false, message: "Please provide rating!"});
        } else res.send({success: false, message: "Please provide no. of doubt Takers"});
      } else res.send({success: false, message: "Please provide a valid option"});
    } else res.send({success: false, message: "Please provide a valid option!"});
  } else res.send({success: false, message: "Please provide valid stars!"});


}
export default blfeedbackInitialChecks;