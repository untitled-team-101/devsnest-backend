import {  Response, NextFunction } from "express"
import User from "../models/user";
import Roles from "../utils/roles";

const isAllowedToSetScrumData =  async (req : any , res : Response, next : NextFunction) => {
    const user = req.user;
    const {userId} = req.body;
    if(user.userId === userId || user.roles.indexOf(Roles.admin) > -1){
        next();
    }else{
        const userData : any = await User.findOne({where:{userId}})
        if(user.roles.indexOf(Roles.tl) > -1 || user.roles.indexOf(Roles.vtl) > -1 && user.teamId === userData.teamId){
            next();
        } else {
            res.send(200).json({
                message: "you can't update scrum for this user",
                success: false
            })
        }
    }
}

export default isAllowedToSetScrumData;
