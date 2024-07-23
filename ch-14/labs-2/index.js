'use strict';

const os = require('os');

function getProcessUptime() {
  // Get the uptime of the current process in seconds
  return process.uptime();
}

function getOsUptime() {
  // Get the operating system uptime in seconds
  return os.uptime();
}

function getOsTotalmem() {
  // Get the total system memory in bytes
  return os.totalmem();
}

function getOsTotalHeapMemory() {
  // Get the total heap memory used by the process in bytes
  return process.memoryUsage().heapTotal;
}

setTimeout(() => {
  console.log(getProcessUptime()); // Output uptime of the process
  console.log(getOsUptime()); // Output uptime of OS
  console.log(getOsTotalmem()); // Output total system memory
  console.log(getOsTotalHeapMemory()); // Output total heap memory
}, 1000);
