const db = require("../db/students.json");

const studentDetail = (request, response) => {
  const { id } = request.params;

  if (parseInt(id) == "NaN") {
    response.json({
      status: 400,
      message: "Bad request ID incorrect",
      data: null,
    });
  } else {
    const studentById = db.filter(
      (student) => student.ID == id && student.active == true
    );

    if (studentById.length <= 0) {
      response.json({
        status: 404,
        message: "student not found",
        data: studentById,
      });
    } else {
      response.json({
        status: 200,
        message: "student found",
        data: studentById,
      });
    }
  }
};
module.exports = studentDetail;
