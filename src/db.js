const mongoose = require("mongoose")


module.exports = () => {
    return mongoose.connect("mongodb+srv://pranjal:pranjal@cluster0.vu4xg.mongodb.net/bos2backend?retryWrites=true&w=majority")
}