import mongoose from "mongoose"

const session_log_schema = new mongoose.Schema({
  session_id: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } || "visitor", // Track registered users in session_control with req.session.passport.user. Comes from the deserialized user id from session store.
  metadata: {
    type: Map,
    of: String, // Convert metadata fields to a Map for consistency
  },
  activity: { //Activity is assigned to the req.session.activity
    type: Map,
    of: String, // Flexible key-value pairs for tracking different activities
    //Here we can track the users/visitor activity of interest
  },
}, { timestamps: true });

export const SessionLog = mongoose.model('SessionLog', session_log_schema);

