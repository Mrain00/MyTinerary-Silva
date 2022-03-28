const mongoose = require ('mongoose')

const activitiesSchema = new mongoose.Schema({
    name:{type:String, required: true},
    description:{type:String, required: true},
    image:{type:String, required: true},
    itineraryId:{type:String},
})
const Activities = mongoose.model('activities', activitiesSchema)
module.exports = Activities