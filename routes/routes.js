const router = require("express").Router();

const ping = require("../controller/pingController");
const message = require("../controller/messageController");

router.post("/ping", ping.getPingDevice);
router.post("/message", message.getMessage);

module.exports = router;
