import dotenv from "dotenv";
dotenv.config();

import { startProducingRiderEvents } from "./rider/rider.js";

const riders = ["rider1", "rider2", "rider3", "rider4", "rider5", "rider6"];

startProducingRiderEvents(riders).catch(console.error);
