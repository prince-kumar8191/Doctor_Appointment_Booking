import express from 'express'
import { registerUser,loginUser, getProfile,updateProfile, bookAppointment } from '../controller/userController.js'
import authUser from '../middleware/authUser.js'
import uplaod from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',uplaod.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)







export default userRouter