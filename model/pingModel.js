const mqtt = require("mqtt");
const config = require("../config.json");

exports.pingDevice = async (msg, callback) => {
  let client = mqtt.connect(config.host, config.options);

  await client.on("connect", function () {
    console.log("Connected to local MQTT");
    //logic here...
    client.end();
  });
  callback(null, "Check Device");

  client.on("close", function () {
    console.log("Connected: ", client.connected);
  });
};
