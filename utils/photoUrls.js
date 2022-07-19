require("dotenv").config();
function photosUrls(request, photos = []) {
  const photoList = photos;
  console.log(process.env.NODE_ENV);
  if (photos.length <= 0) return;
  const http = request.protocol == "http" ? "http" : "https";
  return photoList.map(
    (photo) => `https://${request.get("host")}/static/${photo}`
  );
}
module.exports = photosUrls;
