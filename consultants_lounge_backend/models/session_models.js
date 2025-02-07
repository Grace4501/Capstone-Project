import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model


export const create_user = async (userData) => {
    const user = new User(userData)
    return await user.save()
}

export const find_user_by_id = async (_id)=>{
    const user = await User.findOne({ _id })

    if (!user) return null; // User not found
    switch(user.role){
        case "client":
            return await get_client_info(user._id)
            
        case "consultant":
            return await get_consultant_info(user._id)
    }
}

export const find_user_by_email = async (email) => {
    const user = await User.findOne({ email })

    if (!user) return null; // User not found
    switch(user.role){
        case "client":
            return await get_client_info(user._id)
            
        case "consultant":
            return await get_consultant_info(user._id) 
    }
}

//Private methods that joins users and consultant/client/admin info into one document...

const get_consultant_info = async (user_id) => {
    const consultant = await Consultant.findOne({ info: user_id }).populate("info");
    return consultant;
};


const get_client_info = async (user_id) => {
    const client = await Client.findOne({ info: user_id }).populate("info");
    return client;
}
