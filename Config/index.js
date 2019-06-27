const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = 'mongodb://salemmBquate:salemm2019@ds133601.mlab.com:33601/kaindb'
mongoose.connect(url, {useNewUrlParser:true});
mongoose.connection.once('open', () => console.log(`Conected to mongo at ${url}`) )