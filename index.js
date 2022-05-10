const PORT = 8080;
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

app.use(cors());

const server = http.createServer(app);

const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", routes);

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
