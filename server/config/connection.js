const mongoose = require('mongoose');

const connection = "mongodb+srv://eqnxcrstpro:NewLife!2021@gyroz.83cg2.mongodb.net/astrolove_db?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/astrolove_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
