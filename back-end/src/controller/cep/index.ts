import { Request, Response } from "express";
import { getCepByApi } from "../../services";
import { logger } from "../../utils/logger";
import { getRedis, setRedis } from "../../db/redis";

export const cepController = async (req: Request, res: Response) => {
  const { tracking } = req.query;

  try {
    // const cepRedis = await getRedis(`cep-${tracking}`);

    // const cep = JSON.parse(cepRedis);

    // if (!cepRedis) {
    const result = await getCepByApi(tracking);
    //   const setCep = await setRedis(`cep-${tracking}`, JSON.stringify(result));
    logger.info(JSON.stringify(result));
    return res.status(200).send(result);
    // }
    // return res.status(200).send(cep);
  } catch (error) {
    logger.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
