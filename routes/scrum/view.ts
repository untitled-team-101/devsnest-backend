import {Request, Response} from "express";
import Scrum from "../../models/scrum";

const view = async (req : Request, res : Response) => {
    console.log(req.query);
 const userId = req.query.userid;
 const date = req.query.date;

 const data :any = await Scrum.findOne({where: {userId, date}})
 if(data){
     res.status(200).send({
        userId: data.userId,
        date : data.date,
        attendance: data.attendance,
        thaCount: data.thaCount,
        thaLink: data.thaLink,
        backlog: data.backlog,
        activity: data.activity,
        rating: data.rating,
        sawClass: data.sawClass
     })
 }else{
     res.status(200).json({
         message: `can't find scrum on ${date}`,
         success: false
     })
 }
}

export default view;