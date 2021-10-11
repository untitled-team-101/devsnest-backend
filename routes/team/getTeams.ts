import { Request, Response } from "express";
import Team from "../../models/team";
// @ts-ignore
import crypto from "crypto";

// GET /api/team/get
const getTeams = async (req: Request, res: Response) => {
  res.send({
    success: false,
  });
};

export default getTeams;
