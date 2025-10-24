const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://aniketbatule1717_db_user:Aniket123@cluster0.uixy0at.mongodb.net/PeerPay")

    console.log(`MongoDB connected`.bgGreen.white.bold)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
