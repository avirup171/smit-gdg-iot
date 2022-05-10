const mqtt = require("mqtt");
const config = require("../config.json");

exports.messageModel = async function (device_id, msg, callback) {
  console.log(device_id, msg);

  let client = mqtt.connect(config.host, config.options);

  await client.on("connect", function () {
    console.log("Connected to local MQTT");
    //logic here...
    client.end();
  });
  callback(null, "message sent");

  client.on("close", function () {
    console.log("Connected: ", client.connected);
  });
};
