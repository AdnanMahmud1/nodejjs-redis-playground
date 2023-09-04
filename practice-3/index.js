const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6380,
  password: "euOX7EwVmmxKdayKBTsy354p",
});

//Set initial visits
client.set("visits", 0);

//defining the root endpoint
app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is: " + visits + 1);
    client.set("visits", parseInt(visits) + 1);
  });
});

//specifying the listening port
app.listen(8081, async () => {
  await client.connect();
  console.log("Listening on port 8081");
});
