var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var matchSchema = mongoose.Schema({
  name: String,
  tagline: String,
  image_url: String,
  logo: String,
  date: String,
  teama: String,
  teamb: String,
  city: String

});
var Match = mongoose.model("Match", matchSchema);

function validateMatch(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    image_url: Joi.string().min(3).max(1000).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Match = Match;
module.exports.validate = validateMatch;
