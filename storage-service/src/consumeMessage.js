import { kafkaConsumer } from "./config/kafka.js";
import { OrderEvent } from "./db.js";

export async function startConsuming() {
  await kafkaConsumer.connect();
  await kafkaConsumer.subscribe({ topic: "food-updates" });

  await kafkaConsumer.run({
    eachMessage: async ({ topic, message }) => {
      const data = JSON.parse(message.value.toString());

      const record = new OrderEvent(data);
      await record.save();

      console.log(`Saved order event ${data.eventId} to MongoDB`);
    },
  });
}
