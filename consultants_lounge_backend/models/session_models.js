import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model
//using dummy data for dev...
import { dummyConsultantData} from "../utils/user_consultant_dummy_data.js"
import { dummyUserData} from "../utils/user_dummy_data.js"
import bcrypt from 'bcrypt'


export const reset_dummy_user_data = async () => {
    await User.deleteMany({});
    await Consultant.deleteMany({});
    await insert_dummy_user_data();
}

export const insert_dummy_user_data =   async function () {
    for(let user of dummyUserData){
        user.password = await bcrypt.hash(user.password, 10)
    }
    const users = await User.insertMany(dummyUserData)
    
    const consultantsWithUsers = dummyConsultantData.map((consultant, index) => {
      consultant.info = users[index]._id // Link consultant to user
      return consultant
    });
    await Consultant.insertMany(consultantsWithUsers);
}

export const create_user = async (userData) => {
    const user = new User(userData)
    return await user.save()
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

export const get_consultant_info = async (user_id) => {
    console.log("Searching for consultant with info:", user_id);

    const consultant = await Consultant.findOne({ info: user_id }).populate("info");

    console.log("Consultant found:", consultant);
    return consultant;
};


export const get_client_info = async (user_id) => {
    
    const client = await Client.findOne({ user_id }).populate("info");
    return client;
}
