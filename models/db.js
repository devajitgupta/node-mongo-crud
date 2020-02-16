const mongoose = require('mongoose');

mongoose.connect('mongodb://ajitgupta50:ajit123@cluster0-shard-00-00-izzkj.mongodb.net:27017,cluster0-shard-00-01-izzkj.mongodb.net:27017,cluster0-shard-00-02-izzkj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');