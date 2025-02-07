import mongoose from 'mongoose';
import { SessionLog } from './schemas/session_log_schema.js';

// Function to start the session change stream
async function startSessionChangeStream() {
    // Ensure that mongoose is connected to MongoDB
    if (!mongoose.connection.readyState) {
        console.error("MongoDB is not connected.");
        return;
    }
    
    const sessionChangeStream = await mongoose.connection.collection('sessions').watch()

    console.log("...\nSession tracker system enabled")

    sessionChangeStream.on('change', async (change) => {

        if(!change.fullDocument || change.fullDocument === 'undefined') return

        if (change.operationType === 'insert' || change.operationType === 'update') {
            try {
                console.log("\nA session was created or modified:\n...")

                const {_id, session} = change.fullDocument
                let parsedSession = JSON.parse(session)
               
                let userId = parsedSession.passport? parsedSession.passport.user : null
                let activity = parsedSession.activity? parsedSession.activity : null
                let metadata = parsedSession.metadata? parsedSession.metadata : null
                                    
                // If session is inserted (new session), create a session log
                if (change.operationType === 'insert') {
                    console.log("\n A session was created:\n...")
                    console.log(parsedSession)
                    await createSessionLog(_id, userId, activity, metadata)
                    console.log('A session log document was created for new initialized session_id: ' + _id);
                } 
                
                // If session is updated (e.g., user logs out or session attributes change)
                if (change.operationType === 'update') {
                    console.log("\n A session was updated:\n...")
                    console.log(parsedSession)
                    await updateSessionLog(_id, activity, metadata)
                    console.log('Session log updated for session_id: '+ sessionId);
                }

            } catch (err) {
                console.error('Error handling session change:', err)
            }
        }
    });
}

// Create Session Log Helper Function
async function createSessionLog(session_id, userId = null, activity = null, metadata = null) {

    const sessionLog = new SessionLog({
        session_id,
        user_id: userId? userId:null,
        metadata: metadata? metadata:null,
        activity: activity? activity:null,
    });

    await sessionLog.save();
    

}

// Update Session Log Helper Function
async function updateSessionLog(session_id, activity = null,  metadata = null) {
    
    const log = await SessionLog.findOne({ session_id }).sort({ createdAt: -1 }).limit(1); 
     
    log.activity.set(Object.keys(activity)[0], Object.values(activity)[0]);
    
    await log.save();

     
}

export { startSessionChangeStream };
