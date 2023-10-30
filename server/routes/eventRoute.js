import express from "express";
import {
  getEvents,
  getAllEventsLocation,
  getSeatsMap,
  getAllEvents,
} from "./../controllers/eventController.js";
import { verifyToken } from "../controllers/authController.js";
const router = express.Router();

router.get("/location", getAllEventsLocation);
router.get("/location/:location", getEvents);
router.get("/:eventId", getSeatsMap);
router.get("/", getAllEvents);

export default router;
