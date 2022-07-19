const express = require("express"),
  router = express.Router(),
  studentDetail = require("./controller/detail.controller"),
  ListController = require("./controller/lists.controller");

const listController = new ListController(router);
const routes = () => {
  router.get("/luxurys", listController.luxuryList);
  router.get("/students", listController.studentList);
  router.get("/testimonials", listController.studentList);
  router.get("/student/:id", studentDetail);
  router.get("*", (request, response) => {
    response.json({
      status: 404,
      message: "404 Not Found",
      originalUrl: request.originalUrl,
    });
  });
  return router;
};
module.exports = routes;
