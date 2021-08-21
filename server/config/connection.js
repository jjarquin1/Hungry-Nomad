const mongoose = require('mongoose');

//connection to MongoDb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hungry-nomad', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection; 