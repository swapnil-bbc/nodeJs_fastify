const { build } = require("./app");
const app = build();

app.listen(3000, (err) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
});