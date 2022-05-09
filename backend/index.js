import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import postRoutes from "./Routes/posts.js"
import authRoutes from "./Routes/auth.js"


const app = express()

dotenv.config();

app.use( bodyParser.json( { limit: "30mb", extended: true } ) )
app.use( bodyParser.urlencoded( { limit: "30mb", extended: true } ) )

app.use( cors() );
app.use( "/posts", postRoutes )
app.use("/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Memories Api")
})

const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_URL, { useUnifiedTopology: true } )
    .then( () => app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) ) )
    .catch( ( error ) =>
    {
        console.log( error.message )
    } )

/* mongoose.set( "useFindAndModify", false ); */