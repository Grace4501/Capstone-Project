import mongoose from "mongoose"
import * as testing_actions from "../models/testing_models.js"
import { SessionLog } from "../models/schemas/session_log_schema.js";
//Testing random methods to check if the routes are working fine....
// Testing random methods to check if the routes are working fine....
export const clear_session_logs = async (req, res) => {
    try {
        const result = await SessionLog.deleteMany({}); // Delete all documents
        console.log(`--\nDeleted ${result.deletedCount} session logs.`);

        res.status(200).json({ message: "All session logs deleted successfully." });
    } catch (err) {
        console.error("Error clearing session logs:", err);
        res.status(500).json({ error: "Failed to clear session logs." });
    }
};

export const show_dashboard = async (req, res) => {
    try {
        if (!req.session) {
            console.log("No active session found.");
            return res.status(401).json({ message: "Session not found" });
        }

        console.log("Session ID:", req.sessionID);

        // Retrieve session collection (Ensure correct name)
        const sessionCollection = await mongoose.connection.collection('sessions');
        const sessionData = await sessionCollection.findOne({ _id: req.sessionID });

        if (!sessionData) {
            console.log("Session not found in MongoDB.");
            return res.status(401).json({ message: "Session not found in MongoDB" });
        }

        const client_ip = req.socket.remoteAddress;
        const user_agent = req.headers['user-agent'];

        console.log('--\nThe current request comes from IP:', client_ip);
        console.log('--\nUser-Agent:', user_agent);

        // Safely update session metadata without overwriting structure
        req.session.metadata = {
            ip_address: client_ip,
            user_agent: user_agent
        };

        await req.session.save((err) => {
            if (err) {
                console.error("Error saving session:", err);
                return res.status(500).json({ message: "Error updating session" });
            }
            console.log(`Session ${req.sessionID} updated with metadata.`);
            res.status(200).json({ message: "Dashboard accessed", metadata: req.session.metadata });
        });

    } catch (error) {
        console.error("Error in show_dashboard:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};




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