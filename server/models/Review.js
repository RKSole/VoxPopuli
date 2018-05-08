const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    critic: { type: Schema.Types.ObjectId, ref: "User" },
    firm: { type: Schema.Types.ObjectId, ref: "Company" },
    comments: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    punctuation: Number,
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
