const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

async function connect(){
    const username = process.env.MONGODN_USERNAME;
    const password = process.env.MONGODB_PSW;
    const url = process.env.MONGODB_URL;

await mongoose.connect(`mongodb+srv://${username}:${password}@${url}/WiseWardrobe`)
 console.log('MongoDB connected');

}

module.exports =  connect;