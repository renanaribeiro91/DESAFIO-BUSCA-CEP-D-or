import { Router, Request, Response } from "express";
import { getCepByApi } from "../services";
import { cepSchema } from "../services/validation";

const routes = Router();

routes.get("/", async (req: Request, res: Response) => {
  const { tracking } = req.query;

  const result = await getCepByApi(tracking);
  const validation = cepSchema.validate({ cep: result });
  return res.status(200).send(result);
});

export default routes;
