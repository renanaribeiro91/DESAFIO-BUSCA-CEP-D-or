import { Request, Response } from "express";
import { getCepByApi } from "../../services";

export const cepController = async (req: Request, res: Response) => {
  const { tracking } = req.query;

  const result = await getCepByApi(tracking);
  console.log(result);
  return res.status(200).send(result);
};
