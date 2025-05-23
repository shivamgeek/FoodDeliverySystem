import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "analytics-service",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

export const kafkaConsumer = kafka.consumer({ groupId: "analytics-group" });
