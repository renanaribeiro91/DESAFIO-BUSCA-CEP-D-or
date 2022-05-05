import { Router } from "express";

import { cepController } from "../controller/cep";
import { cepSchema } from "../services/rules";
import { cepValidade } from "../services/validate";

const routes = Router();

routes.get("/", cepValidade(cepSchema), cepController);

export default routes;
