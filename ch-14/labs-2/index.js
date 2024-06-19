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

setTimeout(() => {
  console.log(getProcessUptime()); // Output uptime of the process
  console.log(getOsUptime()); // Output uptime of OS
  console.log(os.totalmem()); // Output total system memory
  console.log(process.memoryUsage().heapTotal); // Output total heap memory
}, 1000);
