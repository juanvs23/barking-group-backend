const luxurys = require("../db/luxurys.json");
const students = require("../db/students.json");
const testimonial = require("../db/testimonial.json");
const neighborhood = require("../db/neighborhood.json");
const photosUrls = require("../utils/photoUrls");
class ListController {
  router;
  photos;
  constructor(router) {
    this.router = router;
  }
  studentList(request, response) {
    /*  const dbData = students.map((data) => {
      const {
        ID,
        active,
        grades,
        Name,
        Gender,
        Class,
        Club,
        Persona,
        Crush,
        BreastSize,
        Strength,
        Hairstyle,
        Color,
        Stockings,
        Accessory,
        ScheduleTime,
        ScheduleDestination,
        ScheduleAction,
      } = data;
    }); */
    return response.json({ status: 200, data: students });
  }

  luxuryList(request, response) {
    const dbData = luxurys.map((data) => {
      const { id, name, price, photos, category, description, specs } = data;
      return {
        id,
        name,
        price,
        specs,
        photos: photosUrls(request, photos),
        category,
        description,
      };
    });

    return response.json({ status: 200, data: dbData });
  }
  testimonialList(request, response) {
    const dbData = testimonial.map((data) => {
      const { id, name, location, review, photos, text } = data;
      return {
        id,
        name,
        location,
        review,
        photos: photosUrls(request, photos),
        text,
      };
    });

    return response.json({ status: 200, data: dbData });
  }
  neighborhoodList(request, response) {
    const dbData = neighborhood.map((data) => {
      const { id, name, location, country, photos, description } = data;
      return {
        id,
        name,
        location,
        country,
        photos: photosUrls(request, photos),
        description,
      };
    });

    return response.json({ status: 200, data: dbData });
  }
}

module.exports = ListController;
