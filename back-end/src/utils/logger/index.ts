import { createLogger, format, transports } from "winston";

const logConfig = {
  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    format.printf(
      (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
    )
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/info.log", level: "info" }),
  ],
};

export const logger = createLogger(logConfig);
