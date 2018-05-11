const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    rating: Number,
    birthday: Number,
    email: String,
    owner:[{ type: Schema.Types.ObjectId, ref: "Company" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
  
  );

const User = mongoose.model("User", userSchema);
module.exports = User;
