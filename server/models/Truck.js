const { Schema } = require('mongoose');

const truckSchema = new Schema(
    {
        id: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        location:{
            type: String,
            require: true,
        },
        phone:{
            type: Number,
        },
        imageUrl:{
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            default:0,
        },
        url: {
            type: String,
            required: true,
        },
    }
);

const foodTruck = model('foodTruck', truckSchema);

module.exports = foodTruck;