import Rooms from "../models/roomModels.js";

import asyncHandler from "express-async-handler";

const getRooms = asyncHandler(async (req, res) => {
  let queryStr = JSON.stringify({ ...req.query });
  queryStr = queryStr.replace(/\bgt|gte|lt|lte\b/g, (match) => `$${match}`);
  const rooms = await Rooms.find(JSON.parse(queryStr));

  if (!rooms) throw Error("There is no rooms");

  res.json({
    status: "Success",
    results: rooms.length,
    data: {
      rooms,
    },
  });
});

const getRoom = asyncHandler(async (req, res) => {
  const room = await Rooms.find({ slug: req.params.slug });

  if (!room) throw Error("There is no room");

  res.json({
    status: "Success",
    data: {
      room,
    },
  });
});

export { getRooms, getRoom };
