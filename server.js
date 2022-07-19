require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./router");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 5500;

server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(express.json());
server.use("/static", express.static("public"));

server.get("/static/:path/:files", (request, response) => {
  const { path, files } = request.params;

  return response.sendFile(`public/photos/${path}/${files}`, {
    root: __dirname,
  });
});
server.use("/", routes());

server.listen(process.env.PORT || 5500, () => {
  console.log(`Example app listening on port ${port}`);
});
