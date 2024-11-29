import doctorModel from "../models/doctors_model.js"


const changeAvailibitity = async(req,res) =>{
    try {
         
        const {docId} = req.body
        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{availabel: !docData.availabel})
        res.json({success:true,message:'availabelity changed'})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

} 

const doctorList = async(req,res) =>{
    try {
         
      const doctors = await doctorModel.find({}).select(['-password','-email'])

      res.json({success:true,doctors})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {changeAvailibitity,doctorList}