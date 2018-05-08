const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    owner: [{ type: Schema.Types.ObjectId, ref: "User" }],
    companyname: String,
    rating: Number,
    comments:[{ type: Schema.Types.ObjectId, ref: "Review" }],
    email: String,
    sector:[{type:String, enum:['e-commerce', 'department stores', 'Hotels', 'hospitality', 
    'educational institution', 'wellness industry', 'sport facility', 'SMEs', 'government institutions', 'public transport', 'entertainment']
  }]
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}
)

const Plan = mongoose.model("Company", companySchema);
module.exports = Plan;

