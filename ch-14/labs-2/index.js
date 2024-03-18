"use strict";

const os = require("os");
const v8 = require("v8");

const inSecondsUptime = os.uptime();
const uptimeInSeconds = process.uptime();

const totalMemoryInBytes = os.totalmem();
const totalMemoryInGB = Math.floor(totalMemoryInBytes / (1024 * 1024 * 1024));

const totalHeapSizeInBytes = v8.getHeapStatistics().total_heap_size;
const totalHeapSizeInMB = Math.floor(totalHeapSizeInBytes / (1024 * 1024));

setTimeout(() => {
  console.log("Process uptime:", uptimeInSeconds, "seconds"); // TODO output uptime of process
  console.log("Operating System uptime:", inSecondsUptime, "seconds"); // TODO output uptime of OS
  console.log("Total System Memory:", totalMemoryInGB, "GB"); // TODO output total system memory
  console.log("Total Heap Memory", totalHeapSizeInMB, "MB"); // TODO output total heap memory
}, 1000);
