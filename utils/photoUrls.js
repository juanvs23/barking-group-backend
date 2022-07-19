require("dotenv").config();
function photosUrls(request, photos = []) {
  const photoList = photos;
  if (photos.length <= 0) return;
  const http =
    process.env.NODE_ENV === "development" ? request.protocol : "https";
  return photoList.map(
    (photo) => `${http}://${request.get("host")}/static/${photo}`
  );
}
module.exports = photosUrls;
