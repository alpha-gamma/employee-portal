const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserAppliedOpeningSchema = new Schema(
  {
    projectOpeningId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserAppliedOpening', UserAppliedOpeningSchema);
