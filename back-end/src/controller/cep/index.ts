import { Request, Response } from "express";
import { getCepByApi } from "../../services";
import { logger } from "../../utils/logger";

export const cepController = async (req: Request, res: Response) => {
  const { tracking } = req.query;
  try {
    const result = await getCepByApi(tracking);
    return res.status(200).send(result);
  } catch (error) {
    throw new Error();
  }

  // logger.error(
  //   `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
  //     req.originalUrl
  //   } `
  // );
};
