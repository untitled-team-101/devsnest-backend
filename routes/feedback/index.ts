// @ts-ignore
import express from "express";
import add from './add';
import edit from "./edit";
import get from "./get";

const router = express.Router();

// add feedback of a team => batch-leader of the team
router.post("/batch-leader", add)
// edit feedback of a team => batch-leader of a team
router.put("/batch-leader", edit)
// view feedback of team by batch-leader => batch-leader, admin
router.get("/batch-leader", get)

export default router;
