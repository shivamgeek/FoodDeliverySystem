import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/db.js";
import { startConsuming } from "./src/consumeMessage.js";

connectDB().then(startConsuming).catch(console.error);
