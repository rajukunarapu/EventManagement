const mongoose = require('mongoose')

const DBConnection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = DBConnection;