const express=require('express')
require('dotenv').config()
const {dbConnection}=require('./config/database')
const taskRoute=require('./routes/task.routes')
const bodyParser = require('body-parser');
const port=process.env.PORT
const app=express()
dbConnection()

app.get('/',(req,res)=>{
    res.send('this is test route')
})
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/v1',taskRoute)
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})