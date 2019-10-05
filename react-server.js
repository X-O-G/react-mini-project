var Client = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const port = 3355;
app.listen(port,()=>{
    console.log('http://localhost:3355');
})
//app.get('/', (req,res)=>{});
app.get('/released', (req,res)=>{
    var page = req.query.page;
    var rowSize = 12;
    var skip = (page*rowSize)-rowSize;
    var url='mongodb://211.238.142.181:27017';
    Client.connect(url,(err, conn)=>{
       var db = conn.db('mydb');
       db.collection('boxoffice_m').find({}).skip(skip).limit(rowSize).toArray(function (err, docs){
           console.log(docs);
           res.json(docs);
           conn.close();
       })
    });
});
/*app.get('/schedule', (req,res)=>{});
app.get('/boxoffice', (req,res)=>{});
app.get('/news', (req,res)=>{});*/
