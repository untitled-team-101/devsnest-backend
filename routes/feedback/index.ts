// @ts-ignore
import express from "express";
import isAllowedToSetFeedbackForm from "../../middlewares/isAllowedToSetfeedbackForm";
import isAllowedToViewFeedbackForm from "../../middlewares/isAllowedToViewFeedbackForm";
import add from "./add";
import edit from "./edit";
import view from "./view";

const router = express.Router();

// add feedback of a team => batch-leader of the team
router.post("/batch-leader", isAllowedToSetFeedbackForm, add);
// edit feedback of a team => batch-leader of a team
router.put("/batch-leader", isAllowedToSetFeedbackForm, edit);
// view feedback of team by batch-leader => batch-leader, admin
router.get("/batch-leader", isAllowedToViewFeedbackForm, view);

export default router;
