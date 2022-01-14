// process.stdout.write("prompt > ");
// process.stdin.on("data", (data) => {
// const cmd = data.toString();
// const { cwd } = require("process");
// process.stdout.write(cwd());
// process.stdout.write("\nprompt > ");
// });

module.exports = function () {
  const { cwd } = require("process");
  process.stdout.write(cwd());
};
