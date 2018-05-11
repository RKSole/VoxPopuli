const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    owner: [{ type: Schema.Types.ObjectId, ref: "Owner" }],
    companyName: String,
    rating: Number,
    email: String,
    nature:[{type:String, enum:['e-commerce', 'department stores', 'hospitality','large corporations','finance','health centers',
    'educational institutions', 'wellness industry', 'sport facility', 'SMEs', 'government institutions', 'transport system', 'entertainment'],
    image: String,
    telephoneNumber: Number
  }]
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}
)

const Company = mongoose.model("Company", companySchema);
module.exports = Company;

