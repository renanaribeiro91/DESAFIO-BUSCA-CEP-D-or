import { Request, Response } from "express";
import { getCepByApi } from "../../services";
import { logger } from "../../utils/logger";

export const cepController = async (req: Request, res: Response) => {
  const { tracking } = req.query;
  try {
    const result = await getCepByApi(tracking);
    logger.info(result);
    return res.status(200).send(result);
  } catch (error) {
    return false;
  }
};

// .replace(/\D/g, '')
