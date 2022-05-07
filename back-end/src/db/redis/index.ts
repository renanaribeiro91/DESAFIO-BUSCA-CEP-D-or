// const redis = require("redis");
// import { promisify } from "util";

// export let redisClient = redis.createClient({
//   host: "redis_local",
//   porta: 6379,
// });

// function getRedis(value: string) {
//   const syncRedisGet = promisify(redisClient.get).bind(redisClient);
//   return syncRedisGet(value);
// }

// function setRedis(key: string, value: string) {
//   const syncRedisSet = promisify(redisClient.set).bind(redisClient);
//   return syncRedisSet(key, value);
// }

// export { redisClient, getRedis, setRedis };
