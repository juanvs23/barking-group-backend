const db = require("../db/luxurys.json");

const listController = (request, response) => {
  const dbData = db.map((data) => {
    const { id, name, price, photos, description, specs } = data;
    const photoList = photos.map(
      (photo) => `https://${request.get("host")}/static/${photo}`
    );
    return {
      id,
      name,
      price,
      specs,
      photos: photoList,
      category,
      description,
    };
  });

  response.json({ status: 200, data: dbData });
};
module.exports = listController;
