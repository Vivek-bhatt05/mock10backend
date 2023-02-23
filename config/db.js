const mongoose = require("mongoose")


const connection =mongoose.connect("mongodb+srv://vivek:bhatt@cluster0.s9rezgr.mongodb.net/airticket?retryWrites=true&w=majority")

module.exports={
    connection
}