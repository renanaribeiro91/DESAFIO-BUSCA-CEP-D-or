import { Router, Request, Response } from "express";
import { getCepByApi } from "../services";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  const { tracking } = req.query;
  console.log(tracking);

  const result = await getCepByApi(tracking);
  console.log(result);
  return res.status(200).send(result);

  // return res.status(200).send({ msg: "ok" });
});

export default routes;
