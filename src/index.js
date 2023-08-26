const dayjs = require("dayjs");
const semver = require("semver");
semver.inc('1.2.3', 'prerelease', 'beta')

console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log(semver(npm) )
