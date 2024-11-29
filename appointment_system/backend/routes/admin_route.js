import express from 'express'
import { addDoctor,allDoctors,LoginAdmin } from '../controller/adminController.js'
import uplaod from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailibitity } from '../controller/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin,uplaod.single('image'),addDoctor)
adminRouter.post('/login',LoginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailibitity)

export default adminRouter
