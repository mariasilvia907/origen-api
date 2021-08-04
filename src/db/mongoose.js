const mongoose = require('mongoose');
const uri = "mongodb+srv://mariasilvia907:27VValienTTe.@cluster0.jgsdp.mongodb.net/origen?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});