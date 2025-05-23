import { redisSubscriber } from "./config/redis.js";

// Simulate listening to all 6 riders and 6 orders
const riderIds = ["rider1", "rider2", "rider3", "rider4", "rider5", "rider6"];
const orderIds = Array.from({ length: 6 }, (_, i) => `order-${100 + i}`);

export async function startSubscription() {
  await redisSubscriber.connect();

  for (const riderId of riderIds) {
    await redisSubscriber.subscribe(`rider-location:${riderId}`);
  }

  for (const orderId of orderIds) {
    await redisSubscriber.subscribe(`order-status:${orderId}`);
  }

  redisSubscriber.on("message", (channel, message) => {
    const data = JSON.parse(message);
    console.log(
      `Data to send to client: [${channel}] ->`,
      JSON.stringify(data, null, 2)
    );
  });
}
