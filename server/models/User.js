const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"]
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    rating: Number,
    birthdate: Number,
    email: {
      type: String,
      required: [true, "Email is required"]
    },
    owner: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    reviewsCreated: { type: Number, default: 0 },
    reviewsAssisted: { type: Number, default: 0 },
    profilePic: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model("User", userSchema);
module.exports = User;
