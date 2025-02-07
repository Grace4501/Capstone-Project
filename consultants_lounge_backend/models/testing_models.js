//using dummy data for dev...
import { dummyConsultantData} from "../utils/user_consultant_dummy_data.js"
import { dummyUserData} from "../utils/user_dummy_data.js"
import bcrypt from 'bcrypt'
import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model

//Dummy method for testing and inseting dummy users into the system
export const reset_dummy_user_data = async () => {
    await User.deleteMany({});
    await Consultant.deleteMany({});
    await insert_dummy_user_data();
}

const insert_dummy_user_data =   async function () {
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

