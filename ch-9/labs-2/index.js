"use strict";

const { EventEmitter } = require("events");

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  // Perform any necessary cleanup or graceful shutdown here
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Promise Rejection:", reason);
  // Perform any necessary cleanup or graceful shutdown here
});

// Example code that triggers an unhandled error

const fs = require("fs");
fs.readFile("nonexistent-file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.nextTick(console.log, "passed!");

const ee = new EventEmitter();

ee.once("error", (err) => console.log(err.message));
ee.emit("error", Error("timeout"));
