import * as dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import mongoose from 'mongoose'
import express from'express'
const app = express()
import employeeRouter from './routes/EmployeeRoute.js'
import authRouter from './routes/authRoute.js'
import userRouter from './routes/currentUserRoute.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import notFound from './middleware/not-found.js'
import {authenticationUser} from  './middleware/authenticationUser.js'
import errorHandlerMiddlware from './middleware/errorHandlerMiddleware.js'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const __dirname = dirname(fileURLToPath(import.meta.url));
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.static(path.resolve(__dirname, './public')));

app.use(cookieParser())
app.use(express.json())



app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',authenticationUser,userRouter)
app.use('/api/v1/employee',authenticationUser,employeeRouter)

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./public','index.html'))
})

app.use(notFound)
app.use(errorHandlerMiddlware)

const port = process.env.PORT || 5100

const start = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(port,console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
} 

start()
