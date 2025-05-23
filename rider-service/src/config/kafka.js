import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "rider-simulator",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

export const producer = kafka.producer();
