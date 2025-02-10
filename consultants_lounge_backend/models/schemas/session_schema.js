import mongoose from "mongoose"

export const get_visitor_session_id = async()=>{
  const session = await mongoose.connection.collections["session"]
  return session._id

}




