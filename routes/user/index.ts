// @ts-ignore
import express from 'express'
import registerRouter from "./register"
import loginRouter from "./login"
import roleRouter from "./role"
import verifyRouter from "./verify"
import listRouter from "./list";
import registerInitialChecks from "../../middlewares/registerInitialChecks";
import checkSigned from "../../middlewares/checkSigned";
import checkAdmin from "../../middlewares/checkAdmin";

const router = express.Router()

// create new user => anyone
router.post("/register", registerInitialChecks, registerRouter)
// login a user => anyone
router.post("/login", loginRouter)
// check if signed in on reload => user
router.all("/verify", checkSigned, verifyRouter)
// change role of user => admin
router.put("/role",checkSigned, checkAdmin, roleRouter)
// get user list => admin {
router.get("/list",checkSigned, checkAdmin, listRouter)

export default router
