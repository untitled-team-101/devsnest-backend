// @ts-ignore
import express, {Request, Response} from 'express'
import userRouter from './user'
import scrumRouter from './scrum'
import blFeedbackRouter from './blfeedback'
import teamRouter from './team'
import checkSigned from "../middlewares/checkSigned";
import checkAdmin from "../middlewares/checkAdmin";

const router = express.Router()

router.use("/user", userRouter)
router.use("/scrum", checkSigned, scrumRouter)
router.use("/blfeedback", checkSigned, blFeedbackRouter)
router.use("/team", checkSigned, teamRouter)

router.use("/", (req: Request, res: Response) => {
  res.status(404)
    .send("Not Found")
  console.log("ye hai yaha!")
})

export default router
