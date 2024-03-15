"use strict";

const uptimeInSeconds = process.uptime();

setTimeout(() => {
  console.log("Process uptime:", uptimeInSeconds, "seconds"); // TODO output uptime of process
  console.log(); // TODO output uptime of OS
  console.log(); // TODO output total system memory
  console.log(); // TODO output total heap memory
}, 1000);
