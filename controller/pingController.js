const { response } = require("express");
const mqtt = require("mqtt");
const config = require("../config.json");
const model = require("../model/pingModel");

exports.getPingDevice = async (req, res, next) => {
  var message = req.body.msg;

  if (message === "ON") {
    await model.pingDevice(message, (err, result) => {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(500).json({ data: err });
      }
    });
  } else if (message === "OFF") {
    await model.pingDevice(message, (err, result) => {
      if (!err) {
        return res.status(200).json({ data: result });
      } else {
        return res.status(500).json({ data: err });
      }
    });
  }
};
