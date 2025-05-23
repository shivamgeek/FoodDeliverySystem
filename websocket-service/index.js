import dotenv from "dotenv";
dotenv.config();

import { startSubscription } from "./src/processMessage.js";

startSubscription().catch(console.error);
