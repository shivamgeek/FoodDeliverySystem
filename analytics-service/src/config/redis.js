import Redis from "ioredis";

export const redisPublisher = new Redis({
  host: process.env.REDIS_HOST || "redis",
  port: process.env.REDIS_PORT || 6379,
});
