const url = require("url");
const path = require("path");
const sendFiles = (request, response, next) => {
  const { files } = request.params;
  console.log(process.cwd());
  const filesPath = path.join(`${process.cwd()}/public/`, files);
  console.log(filesPath);

  return response.sendFile(filesPath);
};

module.exports = sendFiles;
