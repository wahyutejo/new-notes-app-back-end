const Joi = require('joi');

const ExportNotesPayloadShema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }).required(),
});

module.exports = ExportNotesPayloadShema;
