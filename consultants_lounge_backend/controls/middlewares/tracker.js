import mongoose from "mongoose"


export const track_login_activity = async function(req, res, next){

    req.session.activity = {...req.session.activity, logged_in : true}

    await req.session.save((err) => {
            if (err) {
                console.error("Error saving session:", err);
                //return res.status(500).json({ message: "Error updating session" })
            }
            console.log(`Session ${req.sessionID} updated with login activity.`);
            

        })
}

export const track_metadata_from_user = async (req, res, next) => {
    try {
        console.log("--\n--\nThe following request is new: ", req.isNew, "\n\n")
        
        if(req.isNew && req.path.includes("/login")){
            console.log("this is a LOGIN first request so it will be redirected to the login route...")
            return next()
        }
        
        if(req.isNew){
    
            // Safely update session metadata without overwriting structure.
          
            req.session.metadata = {}
            req.session.activity = {logged_in : false}
            req.session.metadata.ip_address = req.socket.remoteAddress;
            req.session.metadata.user_agent = req.headers['user-agent'];
            //req.session.activity.logged_in = false.

            console.log("Adding metadata to visitor's session ID :", req.sessionID);  
            console.log('--\nThe current request comes from IP:', req.session.metadata.ip_address);
            console.log('--\nUser-Agent:', req.session.metadata.user_agent);
            console.log("--\nVisitor session: ", req.session)

            await req.session.save((err) => {
                console.log("this is a visitor's first request. Session will be stored...")
                if (err) {
                    console.error("Error saving session:", err);
                    //return res.status(500).json({ message: "Error updating session" });
                }
    
                console.log(`Session (${req.sessionID}) successfully stored...`);
                next()
                
            })
        }
        else {
            
            next()
        }
       

    } catch (error) {
        console.error("Error in tracking ops: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};