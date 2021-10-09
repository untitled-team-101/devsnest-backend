// @ts-ignore
import express from "express";
import createTeam from "./createTeam";
import removeMember from "./removeMember";
import addMember from "./addMember";
import checkAdmin from "../../middlewares/checkAdmin";
const router = express.Router();

router.post("/create", checkAdmin, createTeam)
router.post("/remove", checkAdmin, removeMember)
router.post("/add", checkAdmin, addMember)

export default router;
