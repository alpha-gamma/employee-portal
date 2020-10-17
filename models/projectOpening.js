const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectOpeningSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['open', 'close'],
      default: 'open'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ProjectOpening', ProjectOpeningSchema);
