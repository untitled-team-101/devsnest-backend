import { NextFunction, Request, Response } from "express";
// @ts-ignore
import jwt from "jsonwebtoken";

import roless from "../utils/roles";

const checkAdmin = async (req: any, res: Response, next: NextFunction) => {
  if (req.user.roles.indexOf(roless.admin) > -1) return next();
  res.status(401).send({
    success: false,
    message: "You need to be admin to access it",
  });
};

export default checkAdmin;
