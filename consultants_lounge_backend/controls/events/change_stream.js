import mongoose from 'mongoose';
import { SessionLog } from '../../models/schemas/session_log_schema.js';
import {get_visitor_session_id} from "../../utils/visitor_session_id.js"

// Function to start the session change stream
async function startSessionChangeStream() {
    // Ensure that mongoose is connected to MongoDB.
    if (!mongoose.connection.readyState) {
        console.error("MongoDB is not connected.");
        return;
    }
    
    const sessionChangeStream = await mongoose.connection.collection('sessions').watch([], { fullDocument: 'updateLookup' })

    console.log("...\nSession tracker system enabled")

    sessionChangeStream.on('change', async (change) => {

        const updatedDocument = change.fullDocument
        console.log("doc:   ", updatedDocument)
        if(!updatedDocument) {
            console.log("change documents had no changes")
            return
        }


        console.log("...\n...\n--- SESSION CHANGE DETECTED ---\n...\n...");
        console.log("Operation Type:", change.operationType);
        console.log("Change Details:", JSON.stringify(change, null, 2));

    
        if (change.operationType === 'delete') {
            console.log("...\nSession deleted. No data to process.");
            return;
        }

        if (change.operationType === 'update') {

            if(!updatedDocument.session){
                console.log("...\nSkipping session update: No relevant fields changed.");
                return;
            }

        }
    
        try {
            const session = JSON.parse(updatedDocument.session)

            console.log(`Updated session: `, session)

            if (!session['activity'] && !session['metadata']) {
                console.log("...\nSkipping session update: No relevant fields changed.");
                return;
            }

            let sessionId = updatedDocument._id;
            let userId = session.passport?.user || 'visitor' // Extract userId from passport
            let activity = session.activity || {...session.activity, logged_in:true};
            let metadata = session.metadata || {...session.metadata, lol:'lol'};
    
            if (!userId) {
                console.warn(`...\nSkipping session log: No userId found for session ${sessionId}`);
                return;
            }
    
            if (change.operationType === 'insert') {
                console.log("...\nNew session created. Inserting new session into session logs...");
                await createSessionLog(sessionId, userId, activity, metadata);
            } else if (change.operationType === 'update') {
                console.log("...\nSession updated. Updating session log...");
                await updateSessionLog(sessionId, activity, metadata);
            }
        } catch (err) {
            console.error("Error handling session change:", err);
            return
        }
    });
    


}

// Create Session Log Helper Function
async function createSessionLog(session_id, userId , activity,  metadata) {

    console.log(userId)
    if(userId === "visitor"){
        userId = await get_visitor_session_id()
    }

    
    const sessionLog = new SessionLog({
        session_id,
        user_id: userId,
        metadata: metadata,
        activity: activity,
    });

    await sessionLog.save();
    

}

// Update Session Log Helper Function
async function updateSessionLog(session_id, activity, metadata) {

    const log = await SessionLog.findOne({ session_id }).sort({ createdAt: -1 }).limit(1); 

    if (!log) {
        console.log("No existing session log found.");
        return;
    }

    console.log("session log found: ", log);
    console.log("metadata log found: ", metadata);
    console.log("activity log found: ", activity);
    
    if (!log.activity) log.activity = new Map();
    if (!log.metadata) log.metadata = new Map();

    for (const [key, value] of Object.entries(activity)) {
        log.activity.set(key, value);
    }

    for (const [key, value] of Object.entries(metadata)) {
        log.metadata.set(key, value);
    }

    // Explicitly mark fields as modified
    log.markModified('activity');
    log.markModified('metadata');

    console.log("session log modified: ", log);

    await log.save();

}

export { startSessionChangeStream };
