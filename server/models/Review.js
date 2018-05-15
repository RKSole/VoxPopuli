const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    critic: { type: Schema.Types.ObjectId, ref: "Owner" },
    firm: { type: Schema.Types.ObjectId, ref: "Company" },
    comments: {
      type:String,
      required: true
    },
    punctuation: {
      type:Number,
      required: true,
    },
    location: Number
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

