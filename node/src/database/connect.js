const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.tyu77dq.mongodb.net/?retryWrites=true&w=majority&appName=cursonodejs");
    console.log("Conectado ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};


module.exports = connectToDatabase;