const { response } = require("express");
const express = require("express");

const app = express();

const PORT = 5001;

app.use(express.json());

let payload = [];

// require('./app/routes')(app, {});

app.get("/", (req, res) => {
  //   console.log(payload[payload.length - 1]);
  return res.send(payload[payload.length - 1]);
});

app.post("/", (req, res) => {
  payload.push(req.body);
  return res.send("webhook received");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
