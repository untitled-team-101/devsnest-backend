// @ts-ignore
import express from "express";
import isAllowedToSetFeedbackForm from "../../middlewares/isAllowedToSetfeedbackForm";
import isAllowedToViewFeedbackForm from "../../middlewares/isAllowedToViewFeedbackForm";
import add from '../blfeedback/add';
import edit from "../blfeedback/edit";
import view from "./view";

const router = express.Router();

router.post("/feedback",isAllowedToSetFeedbackForm, add)
router.put("/feedback",isAllowedToSetFeedbackForm, edit)
router.get("/view", isAllowedToViewFeedbackForm, view)

export default router;