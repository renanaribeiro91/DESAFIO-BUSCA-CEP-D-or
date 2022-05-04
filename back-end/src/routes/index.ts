import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  const { tracking } = req.query;
  console.log(tracking);

  // return res.status(200).send({ msg: "ok" });
});

export default routes;
