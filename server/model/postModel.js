const mongoose = require("mongoose");
const postSchema = mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    //title,department , description ,location , contract duration ,mail us,
    title:{
      type:String,

    },
    department:{
      type:String,
    },
    description:{
      type:String,
    },
    location:{
      type:String,
    },
    contract_duration:{
      type:String,
    },
    mail:{
      type:String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
