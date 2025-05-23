import { v4 as uuid } from "uuid";

export function generateRiderEvents(riderId) {
  const timestamp = new Date().toISOString();

  // Random lat/lon near central Delhi
  const latitude = 28.6 + Math.random() * 0.1;
  const longitude = 77.2 + Math.random() * 0.1;

  const locationUpdate = {
    eventId: uuid(),
    riderId,
    latitude,
    longitude,
    timestamp,
  };

  const statuses = ["picked-up", "delivered"];
  const foodUpdate = {
    eventId: uuid(),
    riderId,
    orderId: `order-${Math.floor(Math.random() * 1000)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    timestamp,
  };

  return { locationUpdate, foodUpdate };
}
