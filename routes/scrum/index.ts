// @ts-ignore
import express from "express";
import add from "./add"
import scrumInitialChecks from "../../middlewares/scrumInitialChecks";
import edit from "./edit"
import attendance from "./attendance";
import isAllowedToGiveAttendace from "../../middlewares/attendancePerm";

const router = express.Router();

router.post("/set", scrumInitialChecks, add);
router.put("/set", edit)
router.post("/attendance",isAllowedToGiveAttendace, attendance)

export default router;