const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    owner: [{ type: Schema.Types.ObjectId, ref: "Owner" }],
    companyName: String,
    rating: {
     type: Number, 
     default: 0 
    },
    email: String,
    image: String,
    telephoneNumber:String,
    url: String,
    comments: String,
    nature:[{type:String, enum:['E-commerce', 'Department Stores', 'Hospitality', 'Large Corporations', 'Finance', 'Health Centers',
    'Educational Institutions', 'Wellness Industry', 'Sport Facility', 'SMEs', 'Government Institutions',
    'Transport System', 'Entertainment'],
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

