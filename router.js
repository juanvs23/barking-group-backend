const { request, response } = require("express");

const express = require("express"),
  router = express.Router(),
  studentDetail = require("./controller/detail.controller"),
  list = require("./controller/list.controller");

const routes = () => {
  router.get("/", list);
  router.get("/student/:id", studentDetail);
  router.get("*", (request, response) => {
    response.json({ status: 404, message: "404 Not Found" });
  });
  return router;
};
module.exports = routes;
