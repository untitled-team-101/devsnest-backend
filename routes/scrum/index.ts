// @ts-ignore
import express from "express";
import add from "./add"
import scrumInitialChecks from "../../middlewares/scrumInitialChecks";
import edit from "./edit"
import attendance from "./attendance";
import isAllowedToGiveAttendance from "../../middlewares/attendancePerm";
import view from "./view";
import isAllowedToSetScrumData from "../../middlewares/isAllowedToSetScrumData";
import isAllowedToViewScrumData from "../../middlewares/isAllowedToViewScrumData";

const router = express.Router();

// add new scrum data => admin, member-self, team-leader and vice-team-leader of same team
router.post("/set",isAllowedToSetScrumData, scrumInitialChecks, add)
// edit scrum data => admin, member-self, team-leader and vice-team-leader of same team
router.put("/set",isAllowedToSetScrumData , edit)
// mark attendance of member => admin, team-leader and vice-team-leader of same team
router.put("/attendance",isAllowedToGiveAttendance, attendance)
// view scrum data => admin, members of same team, batch-leader of team
router.get("/view",isAllowedToViewScrumData, view)

export default router;
