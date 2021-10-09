// @ts-ignore
import express from "express";
import add from "./add"
import scrumInitialChecks from "../../middlewares/scrumInitialChecks";

const router = express.Router();

router.post("/add", scrumInitialChecks, add);

export default router