// @ts-ignore
import express from 'express'
import register from "./register"
import login from "./login"
import verify from "./verify"

const router = express.Router()

// /api/user/register
router.post("/register", register)
router.post("/login", login)
router.post("/verify", verify)

export default router
