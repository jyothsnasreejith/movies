const  mongoose = require("mongoose");
//mongoose.connect("mongodb+srv://jyothsnamj7:jyothsnamj7@cluster0.whizb3y.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://jyothsnasreejith2020:jyothsnasreejith2020@cluster0.5gowa2o.mongodb.net/?retryWrites=true&w=majority");
const Schema=mongoose.Schema;
var movieSchema=new Schema({
    mName : String,
    mActor : String,
    mActress : String,
    mDirector : String,
    mDate : String,
    mCamera : String,
    mProducer : String,
    mLanguage : String
    });

var MovieInfor=mongoose.model("movies",movieSchema);
module.exports=MovieInfor;