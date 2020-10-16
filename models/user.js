const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const jwtSecret = process.env.JWT_SECRET;
const saltRounds = parseInt(process.env.SALT_ROUNDS, 0) || 10;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['employee', 'manager'],
      default: 'employee',
    },
    imagePath: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.hashPassword = async function () {
  console.log('hashing password');
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
};

UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateJwtToken = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 1);

  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    jwtSecret
  );
};

UserSchema.methods.toAuthJson = function () {
  return {
    username: this.username,
    _id: this._id,
    token: this.generateJwtToken(),
  };
};

module.exports = mongoose.model('User', UserSchema);
