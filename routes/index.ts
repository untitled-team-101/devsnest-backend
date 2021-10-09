// @ts-ignore
import express, {Request, Response} from 'express'
import userRouter from './user'
import scrumRouter from './scrum'
import teamRouter from './team'
import blfeedbackRouter from './blfeedback'
import checkSigned from "../middlewares/checkSigned";

const router = express.Router()

router.use("/user", userRouter)
router.use("/scrum",checkSigned, scrumRouter)
router.use("/team",checkSigned, teamRouter)
router.use("/blfeedback", checkSigned, blfeedbackRouter)

router.use("/", (req: Request, res: Response) => {
  res.status(404)
    .send("Not Found")
  console.log("ye hai yaha!")
})

export default router
