const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,    },
    password: {
      type: String,
    },
    rating: Number,
    birthdate: Date,
    email: {
      type: String,
    },
    profilePic: String,
    owner: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    reviewsCreated: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });


const User = mongoose.model("User", userSchema);
module.exports = User;
