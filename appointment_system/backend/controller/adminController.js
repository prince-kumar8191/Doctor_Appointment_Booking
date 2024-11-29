import validator from 'validator'
import bycrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctors_model.js'
import jwt from 'jsonwebtoken'


// Api for adding doctor
const addDoctor = async (req,res)=>{
    try{
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body
        const imageFile= req.file
       
        // const imageFile = req.file;
        
       
        
        

        if(!name || !email || !password || !speciality ||  !degree || !experience || !about || !fees || !address)
        {
            return res.json({success:false,message:"Missing details"})
        }

        // validative email formate
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})

        }

        // validating strong password
        if(password.length < 8)
        {
            return res.json({success:false,message:"please enter a strong password"})
        }

        // hashing doctor password

        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password,salt)

        // upload image to cloudnary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({success:true,message:'Doctor Added'})
     }
    catch(error)
    {
        console.log(error);
        res.json({success:false,message:error.message})
     }

}

//API for the admin login
const LoginAdmin = async(req,res)=>{
    try{

        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
        {
             const token = jwt.sign(email+password,process.env.JWT_SECRET)
             res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid credentials"})
        }
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

// api to get all doctors list for adimn pannel

const allDoctors = async (req,res) =>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}
export  {addDoctor,LoginAdmin,allDoctors}