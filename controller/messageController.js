const model = require("../model/messageModel");

exports.getMessage = async (req, res, next) => {
  var device_id = req.body.device_id.toString();
  var msg = req.body.msg.toString();

  await model.messageModel(device_id, msg, function (err, result) {
    if (!err) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(500).json({ data: err });
    }
  });
};
