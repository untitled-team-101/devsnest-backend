import {NextFunction, Request, Response} from "express";
import emailValidate from "../utils/emailValidate";
import passwordValidate from "../utils/passwordValidate";

const registerInitialChecks = (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password, confirmPassword} = req.body;

    if(name) {
        if (email && emailValidate(email)) {
            if (password && passwordValidate(password)) {
                if (confirmPassword === password) {
                    next();
                } else res.status(406).send("Password doesn't match!");
            } else res.status(406).send("Invalid Password!");
        } else res.status(406).send("Invalid Email!");
    }
    else res.status(406).send("Please provide your Name!");
}

export default registerInitialChecks;
