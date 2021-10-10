import {  Response, NextFunction } from "express"
import User from "../models/user";
import Roles from "../utils/roles";
import Team from "../models/team";

const isAllowedToViewScrumData =  async (req : any , res : Response, next : NextFunction) => {
    const user = req.user;
    const {userId} = req.body;
    if(user.roles.indexOf(Roles.admin) > -1){
        next();
    }else{
        const userData : any = await User.findOne({where:{userId}})
        const teamId = userData.teamId;
        const teamData : any = await Team.findOne({where:{ teamId }})
        if(user.roles.indexOf(Roles.bl) > -1 && user.userId === teamData.batchLeader || user.teamId === userData.teamId){
            next();
        } else {
            res.send(200).json({
                message: "you can't update scrum for this user",
                success: false
            })
        }
    }
}

export default isAllowedToViewScrumData;
