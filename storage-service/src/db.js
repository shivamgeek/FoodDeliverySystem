import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_URI || "mongodb://mongo:27017/foodapp";
  await mongoose.connect(uri, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
}

const orderEventSchema = new mongoose.Schema(
  {
    eventId: String,
    riderId: String,
    orderId: String,
    status: String,
    timestamp: String,
  },
  { collection: "order_events" }
);

export const OrderEvent = mongoose.model("OrderEvent", orderEventSchema);
