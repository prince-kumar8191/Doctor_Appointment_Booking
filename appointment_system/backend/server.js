import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import ConnectCloudinary from './config/cloudnary.js'
import adminRouter from './routes/admin_route.js'
import doctorRouter from './routes/doctor_route.js'
import userRouter from './routes/userRoutes.js'

//app config

const app = express()
const port = process.env.PORT || 4000
connectDB()
ConnectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//

// api endpoint

app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.send("api working great")
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});