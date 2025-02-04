import { User } from './schemas/user_schema.js';  // Import your User model
import { Consultant } from './schemas/user_consultant_schema.js';  // Import your Consultant model
//using dummy data for dev...
import { dummyConsultantData} from "../utils/user_consultant_dummy_data.js"
import { dummyUserData} from "../utils/user_dummy_data.js"

export const reset_dummy_user_data = async (req, res) => {
    await User.deleteMany({});
    await Consultant.deleteMany({});
    await insert_dummy_user_data();
}

export const insert_dummy_user_data =   async function () {
    const users = await User.insertMany(dummyUserData);

    const consultantsWithUsers = dummyConsultantData.map((consultant, index) => {
      consultant.user_info = users[index]._id;  // Link consultant to user
      return consultant;
    });
    await Consultant.insertMany(consultantsWithUsers);
}


