// @ts-ignore
import express from 'express'
import register from "./register"
import login from "./login"
import verify from "./verify"
import registerInitialChecks from "../../middlewares/registerInitialChecks";
import checkSigned from "../../middlewares/checkSigned";

const router = express.Router()

// /routes/user/register
router.post("/register", registerInitialChecks, register)
router.post("/login", login)
router.all("/verify", checkSigned, verify)

export default router
