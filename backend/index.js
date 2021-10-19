import express from "express"
import bodyParser from "body-parser"
import { mongoose } from "mongoose"
import cors from "cors"


const app = express()

app.use( bodyParser.json( { limit: "30mb", extended: true } ) )
app.use( bodyParser.urlencoded( { limit: "30mb", extended: true } ) )

app.use( cors() );

const CONNECTION_URL = 'mongodb+srv://echis65:Echisviper65@cluster0.jva0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useUrlPaser: true } )