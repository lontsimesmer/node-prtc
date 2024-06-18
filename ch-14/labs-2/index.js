'use strict'

const os = require('os')

setTimeout(() => {
  console.log(process.uptime()) // Output uptime of the process
  console.log(os.uptime()) // Output uptime of OS
  console.log(os.totalmem()) // Output total system memory
  console.log(process.memoryUsage().heapTotal) // Output total heap memory
}, 1000)
