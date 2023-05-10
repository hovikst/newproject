import express from "express"
import dotenv from "dotenv"
import path from "path"
import 'dotenv/config'


const app = express()

app.set('view engine', 'ejs');


app.use(express.static('public'))
app.use(express.json())


dotenv.config({
    path: '.env'
})

app.get('/', (req,res)=>{
    res.render('pages/index')
})

app.listen(process.env.PORT, ()=>console.log(`App runing port ${process.env.PORT}` ))