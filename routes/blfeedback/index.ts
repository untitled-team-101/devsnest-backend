// @ts-ignore
import express from "express";
import add from '../blfeedback/add';
import edit from "../blfeedback/edit";

const router = express.Router();

router.post("/feedback", add)
router.put("/feedback", edit)

export default router;