import dotenv from "dotenv";
dotenv.config();

import { startConsuming } from "./src/consumeMessage.js";

startConsuming().catch(console.error);
