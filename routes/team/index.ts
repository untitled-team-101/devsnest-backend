// @ts-ignore
import express from "express";
import createTeam from "./createTeam";
import removeMember from "./removeMember";
import addMember from "./addMember";
import checkAdmin from "../../middlewares/checkAdmin";
import getMembers from "./getMembers";
const router = express.Router();

router.post("/create", checkAdmin, createTeam)
router.put("/add", checkAdmin, addMember)
router.put("/remove", checkAdmin, removeMember)
router.get("/members", getMembers)

export default router;
