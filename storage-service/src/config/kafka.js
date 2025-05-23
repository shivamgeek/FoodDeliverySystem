import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "db-service",
  brokers: [process.env.KAFKA_BROKER || "kafka:9092"],
});

export const kafkaConsumer = kafka.consumer({ groupId: "db-service-group" });
