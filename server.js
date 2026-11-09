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
import rateLimiter from 'express-rate-limit'
import helmet from 'helmet'
import xss from 'xss-clean'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'


const __dirname = dirname(fileURLToPath(import.meta.url));
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.static(path.resolve(__dirname, './public')));

app.set('trust proxy', 1)

// Rate limits apply to the API only, so page loads and static files don't count.
// Responses use the same { msg } JSON shape as the rest of the API.
const limitMessage = { msg: 'Too many requests, please try again later.' }

// General API traffic.
const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: limitMessage
})

// Stricter limit on login/register to slow down password guessing.
const authLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { msg: 'Too many login attempts, please try again in 15 minutes.' }
})

app.use('/api', apiLimiter)
app.use('/api/v1/auth/login', authLimiter)
app.use('/api/v1/auth/register', authLimiter)
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(mongoSanitize())
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
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
} 

start()
