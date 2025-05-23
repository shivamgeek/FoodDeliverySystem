import { kafkaConsumer } from "./config/kafka.js";
import { handleMessage } from "./processMessage.js";

const topics = ["location-updates", "food-updates"];

export async function startConsuming() {
  await kafkaConsumer.connect();

  for (const topic of topics) {
    await kafkaConsumer.subscribe({ topic });
  }

  await kafkaConsumer.run({
    eachMessage: async ({ topic, message }) => {
      await handleMessage(topic, message);
    },
  });
}
