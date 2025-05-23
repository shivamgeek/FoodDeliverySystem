import { redisPublisher } from "./config/redis.js";

export async function handleMessage(topic, message) {
  const data = JSON.parse(message.value.toString());

  if (topic === "location-updates") {
    const channel = `rider-location:${data.riderId}`;
    const payload = {
      type: "location-update",
      riderId: data.riderId,
      coordinates: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      timestamp: data.timestamp,
    };

    await redisPublisher.publish(channel, JSON.stringify(payload));
    console.log(`Published to ${channel}`);
  }

  if (topic === "food-updates") {
    const channel = `order-status:${data.orderId}`;
    const payload = {
      type: "order-status",
      orderId: data.orderId,
      riderId: data.riderId,
      status: data.status,
      timestamp: data.timestamp,
    };

    await redisPublisher.publish(channel, JSON.stringify(payload));
    console.log(`Published to ${channel}`);
  }
}
