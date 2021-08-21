const { Schema } = require('mongoose');

const truckSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        id: {
            type: String,
            require: true,
        },
        alias: {
            type: String,
            required: true,
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