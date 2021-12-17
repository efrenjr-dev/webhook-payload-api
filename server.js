const { response } = require("express");
const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

// require('./app/routes')(app, {});

app.get("/", () => {
  return res.send({ data: {} });
});

app.post("/", (req, res) => {
  console.log(req.body);
  return res.send("hello world");
  //   return res.send({
  //     error: "Bad Request : missing required parameter NAME",
  //   });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
