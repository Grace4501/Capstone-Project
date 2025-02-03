import * as session_actions from "../models/session_models.js"


export const user_register = async (req, res)=>{

}

export const user_login = async (req, res)=>{

}

export const user_logout = async (req,res)=>{

}

export const register_dummy_users = async ()=>{
    try{
        await session_actions.insert_dummy_user_data()
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
    
}
export const reset_dummy_users = async (req, res)=>{
    try{
        await session_actions.reset_dummy_user_data()
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}