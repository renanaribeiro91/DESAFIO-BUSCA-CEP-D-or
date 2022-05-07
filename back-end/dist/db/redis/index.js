"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRedis = getRedis;
exports.redisClient = exports.redisClient = void 0;
exports.setRedis = setRedis;

var _util = require("util");

const redis = require("redis");

let redisClient = redis.createClient({
  host: "redis_local",
  porta: 6379
});
exports.redisClient = exports.redisClient = redisClient;
redisClient.connect();

function getRedis(value) {
  const syncRedisGet = (0, _util.promisify)(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
}

function setRedis(key, value) {
  const syncRedisSet = (0, _util.promisify)(redisClient.set).bind(redisClient);
  return syncRedisSet(key, value);
}