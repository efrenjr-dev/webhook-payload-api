const { response } = require("express");
const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

let payload = [];

// require('./app/routes')(app, {});

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(payload[payload.length - 1]);
  return res.send(payload[payload.length - 1]);
});

app.post("/", (req, res) => {
  console.log(req.body);
  payload.push(req.body);
  return res.send("webhook received");
  //   return res.send({
  //     error: "Bad Request : missing required parameter NAME",
  //   });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
