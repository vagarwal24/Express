import express from 'express'
import connectDB from './db/connectdb.js'
import {join} from 'path'
import web from "./routes/web.js"
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://vagarwal1998:Vikas123@cluster0.50ykigm.mongodb.net/school?retryWrites=true&w=majority"

// DATABASE CONNECTION
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

// Static Files
app.use('/student', express.static(join(process.cwd(), "public")))
app.use('/student/edit', express.static(join(process.cwd(), "public")))

// Set Template Engine
app.set("view engine", "ejs")

// Load Routes
app.use("/student", web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})