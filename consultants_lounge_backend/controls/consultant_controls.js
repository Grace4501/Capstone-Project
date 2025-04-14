import * as consultant_actions from "../models/consultant_models.js"

export const add_employment = async(req, res)=>{
    const consultant_id = req.params.consultantId
    const new_employment =  req.body
    console.log(new_employment)
    try{
        const updatedConsultant = await consultant_actions.add_employment(consultant_id, new_employment)

        if (!updatedConsultant) 
            throw new Error("Consultant not found");
          
        res.status(200).json({
            success: true,
            message: "Employment added successfully",
            updatedConsultant: updatedConsultant
          });

    }
    catch(error){
        console.log("Error add employment:  \n", error)
        res.status(500).json({success: false, error: error})
    }

    

}