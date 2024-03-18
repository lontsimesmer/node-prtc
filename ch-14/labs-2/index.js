"use strict";

const os = require("os");
const v8 = require("v8");

// const inSecondsUptime = os.uptime();
// const uptimeInSeconds = process.uptime();

// const totalMemoryInBytes = os.totalmem();
// const totalMemoryInGB = Math.floor(totalMemoryInBytes / (1024 * 1024 * 1024));

// const totalHeapSizeInBytes = v8.getHeapStatistics().total_heap_size;
// const totalHeapSizeInMB = Math.floor(totalHeapSizeInBytes / (1024 * 1024));

setTimeout(() => {
  console.log(process.uptime()); // TODO output uptime of process
  console.log(os.uptime()); // TODO output uptime of OS
  console.log(os.totalmem()); // TODO output total system memory
  console.log(v8.getHeapStatistics().total_heap_size); // TODO output total heap memory
}, 1000);
