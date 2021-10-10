// @ts-ignore
import express from "express";
import createTeam from "./createTeam";
import removeMember from "./removeMember";
import addMember from "./addMember";
import checkAdmin from "../../middlewares/checkAdmin";
import getMembers from "./getMembers";
import listTeams from "./listTeams";
import getTeams from "./getTeams";
import deleteTeam from "./deleteTeam";

const router = express.Router();

// create a new team => admin
router.post("/create", checkAdmin, createTeam)
// delete a team => admin
router.delete("/delete", checkAdmin, deleteTeam)
// add member to a team => admin
// remove from previous team if any
router.put("/add", checkAdmin, addMember)
// remove member of a team => admin
router.put("/remove", checkAdmin, removeMember)
// get members of a team => admin, same-team, team-bl
router.get("/members", getMembers)
// get all teams => admin
router.get("/list", checkAdmin, listTeams)
// get team assigned to user and team(s) of batch leader => member, batch-leader
// if not a batch leader list self team
router.get("/get", getTeams)

export default router;
