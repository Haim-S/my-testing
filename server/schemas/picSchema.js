

const {Schema, model} = require("mongoose");
const {defaltePicUser} = require("../pic/picRandom");


const picSchema = new Schema({
    title: {
        type: String,
    },
    img:  {type:String, default: defaltePicUser},
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }

})



module.exports = model("Pictures", picSchema);