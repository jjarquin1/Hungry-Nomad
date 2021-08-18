const mongoose = require('mogoose');

//connection to MongoDb
mongoose.connnect(process.env.MONGODB_URI || 'mongodb://localhost/hungry-nomad', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection; 