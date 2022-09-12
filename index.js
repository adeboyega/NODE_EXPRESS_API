import express from "express";
import bodyParser from 'body-parser';
const app = express();
import usersRoutes from './routes/users.js'

app.use(bodyParser.json());

app.use('/users', usersRoutes)
app.get('/',(req,res)=>res.send('hello homepage'))

app.listen(3000,()=>console.log('listeing on port 3000'))

