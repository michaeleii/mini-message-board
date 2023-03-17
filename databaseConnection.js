// Import the mongoose module
const mongoose = require("mongoose");

let { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.knxcea1.mongodb.net/local_library?retryWrites=true&w=majority`;

// Wait for database to connect, logging an error if there is a problem
const connectToMongoDB = async () => {
	await mongoose.connect(mongoDB);
};

module.exports = connectToMongoDB;
