"use strict";

const os = require("os");

const inSecondsUptime = os.uptime();
const uptimeInSeconds = process.uptime();
const totalMemoryInBytes = os.totalmem();
const totalMemoryInGB = Math.floor(totalMemoryInBytes / (1024 * 1024 * 1024));

setTimeout(() => {
  console.log("Process uptime:", uptimeInSeconds, "seconds"); // TODO output uptime of process
  console.log("Operating System uptime:", inSecondsUptime, "seconds"); // TODO output uptime of OS
  console.log("Total System Memory:", totalMemoryInGB, "GB"); // TODO output total system memory
  console.log(); // TODO output total heap memory
}, 1000);
