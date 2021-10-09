// @ts-ignore
import express from "express";
import add from "./add"
import scrumInitialChecks from "../../middlewares/scrumInitialChecks";
import edit from "./edit"

const router = express.Router();

router.post("/set", scrumInitialChecks, add);
router.put("/set", edit)

export default router