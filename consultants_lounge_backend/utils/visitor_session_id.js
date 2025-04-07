import { User } from '../models/schemas/user_schema.js';  // Import your User model

export const get_visitor_session_id = async()=>{
  try {
    const visitor = await User.findOne({ role: "visitor" }); 
    if (!visitor) {
        console.log("Visitor not found");
        return null;
    }
    console.log("Visitor ID:", visitor._id);
    return visitor._id;
} catch (error) {
    console.error("Error fetching visitor:", error);
}

}
