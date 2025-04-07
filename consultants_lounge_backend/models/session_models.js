import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model
import { Client } from './schemas/user_client_schema.js';  // Import your Consultant model
import mongoose from "mongoose";

export const create_user = async (userData) => {
    const user = new User(userData)
    return await user.save()
}

export const create_consultant = async (user_id) => {
    const consultant = new Consultant({
        info: user_id, // Link to User
        expertise_areas: "General", // Default value
        availability_status: "Available", // Default value
        languages: "English", // Default value (or modify based on needs)
        description: "",
        employment_history: "",
        education: "",
    });

    return await consultant.save();
};

export const create_client = async (user_id) => {
    const client = new Client({
        info: user_id, // Link to User
        business_name: "New Business", // Default placeholder
        business_description: "No description available.", // Default value
    });

    return await client.save();
};



export const find_user_by_id = async (_id)=>{
    const user = await User.findOne({ _id })

    if (!user) return null; // User not found
    switch(user.role){
        case "Business Owner":
            return await get_client_info(user._id)
            
        case "Consultant":
            return await get_consultant_info(user._id)
    }
}

export const find_user_by_email = async (email) => {
    const user = await User.findOne({ email })

    if (!user) return null; // User not found

    console.log("User Found: \n",user)
    switch(user.role){
        case "Business Owner":
            return await get_client_info(user._id)
            
        case "Consultant":
            return await get_consultant_info(user._id) 
    }
}

//Private methods that joins users and consultant/client/admin info into one document...

const get_consultant_info = async (user_id) => {
    const consultant = await Consultant.findOne({ info: user_id }).populate("info");
    console.log("consultant: \n", consultant)
    return consultant;
};


const get_client_info = async (user_id) => {
    const client = await Client.findOne({ info: user_id }).populate("info");
    console.log("client: \n", client)
    if(!client){
        return 
    }
    return client;
}
