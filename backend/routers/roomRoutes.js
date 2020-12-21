import express from "express";

import { getRooms, getRoom } from "../controllers/roomControllers.js";

const router = express.Router();

router.route("/").get(getRooms);
router.route("/:slug").get(getRoom);
export default router;
