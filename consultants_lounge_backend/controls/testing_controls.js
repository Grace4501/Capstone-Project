import * as testing_actions from "../models/testing_models.js"

//Testing random methods to check if the routes are working fine....
export const show_dashboard = async(req, res)=>{
    req.session.metadata = {
        ip
    }
    res.status(200).json("dashboard")
}


export const register_dummy_users = async (req,res)=>{
    try{
        await testing_actions.insert_dummy_user_data()
        res.status(200).json({ message: 'Dummy users and consultants added successfully.'});
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
    
}
export const reset_dummy_users = async (req, res)=>{
    try{
        await testing_actions.reset_dummy_user_data()
        res.status(200).json({ message: 'Dummy users and consultants reset successfully.' })
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}