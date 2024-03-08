"use strict";

const os = require("os");

const osIdentifier = os.platform();
console.log("Operating System:", osIdentifier);

process.exit(1);
