import "dotenv/config";
import express from "express";
import routes from "./routes";
import cors from "cors";
import "./modules";
import { logger } from "./utils/logger";
// import { redisClient } from "./db/redis";

const app = express();
// redisClient.connect();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  logger.info(`server is run on PORT ${process.env.PORT}`);
});
