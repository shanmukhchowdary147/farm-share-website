const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shannu:123456Aa@farm-share.an27a.mongodb.net/farm-share?retryWrites=true&w=majority',
        {useNewUrlParser: true}).then(()=> console.log('Connected'))
                                .catch(err=> console.error(err));


app.get('/', (req,res)=>{
    res.send('Shannu')
});


app.listen(5000);