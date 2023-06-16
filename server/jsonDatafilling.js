//this file for put the data in database into the json file

const connectDB = require('./database/mongoDb.js');
const Property = require('./models/outfit.js');

const PropertyJson = require('./closet.json');

const username = 'colab19team09';
    const password = 'Dyg9iUdJ1z69EokK';
    const url = 'cluster0.qgf31p9.mongodb.net';

const start = async () => {
  try {
    await connectDB(`mongodb+srv://${username}:${password}@${url}/WiseWardrobe`)
    await Property.create(PropertyJson);
    console.log("success");
  } catch(err){
    console.log(err);
  }
};

start();