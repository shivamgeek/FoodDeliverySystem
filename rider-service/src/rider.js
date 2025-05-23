import { producer } from "./config/kafka.js";
import { generateRiderEvents } from "./generateEvent.js";

export async function startProducingRiderEvents(riders) {
  await producer.connect();

  setInterval(async () => {
    for (const riderId of riders) {
      const { locationUpdate, foodUpdate } = generateRiderEvents(riderId);

      await producer.send({
        topic: "location-updates",
        messages: [{ key: riderId, value: JSON.stringify(locationUpdate) }],
      });

      await producer.send({
        topic: "food-updates",
        messages: [{ key: riderId, value: JSON.stringify(foodUpdate) }],
      });

      console.log(`[${riderId}] published location & food event`);
    }
  }, 5000);
}
