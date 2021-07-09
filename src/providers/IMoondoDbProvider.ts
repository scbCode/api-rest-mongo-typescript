import config from "../config/config";

const mongoose = require('mongoose');

export class MoongoDb {


 constructor() {
    mongoose.connection.on('connected', function () {
      console.log('Connected to Database ');
    });

    mongoose.connection.on('error', (err) => {
      console.log('Database error '+err);
    });
    mongoose.connect(
      config.urldb, 
      {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  }

    
}