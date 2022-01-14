process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  // const cmd = data.toString();
  const pwd = require("./pwd");

  process.stdout.write(pwd());
  process.stdout.write("\nprompt > ");
});
