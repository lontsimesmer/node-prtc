// Operating system names validation

const osNames = [
  "Windows",
  "Linux",
  "MacOS",
  "sunOS",
  "FreeBSD",
  "AIX",
  "GNU/Linux",
];
const regex = /^(d|w|l|aix|.+bsd|sunos|macos|gnu)/i;

for (const osName of osNames) {
  if (regex.test(osName)) {
    console.log(`${osName} matches the regex pattern.`);
  } else {
    console.log(`${osName} does not matches the regex pattern.`);
  }
}
