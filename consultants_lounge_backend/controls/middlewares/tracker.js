import mongoose from "mongoose"


export const track_login_activity = async function(req, res, next){
    const login_activity = {logged_in : true}
    req.session.activity = login_activity
    await req.session.save((err) => {
            if (err) {
                console.error("Error saving session:", err);
                //return res.status(500).json({ message: "Error updating session" });
            }
            console.log(`Session ${req.sessionID} updated with login activity.`);
            

        })
}

export const track_metadata_from_user = async (req, res, next) => {
    try {

        
        if(req.isNew && req.path.includes("/login")){
            console.log("this is a LOGIN first request so it will be redirected to the login route...")
            return next()
        }
        
        if(req.isNew){

            console.log("Adding metadata to user's session ID :", req.sessionID);

            const client_ip = req.socket.remoteAddress;
            const user_agent = req.headers['user-agent'];
    
            console.log('--\nThe current request comes from IP:', client_ip);
            console.log('--\nUser-Agent:', user_agent);
    
            // Safely update session metadata without overwriting structure
            req.session.metadata = {
                ip_address: client_ip,
                user_agent: user_agent
            }
    
            console.log(req.session)

            await req.session.save((err) => {
                console.log("this is a regular first request. Metadata will be saved in session...")
                if (err) {
                    console.error("Error saving session:", err);
                    //return res.status(500).json({ message: "Error updating session" });
                }
    
                console.log(`Session (${req.sessionID}) updated with user's metadata...`);
                next()
                
            })
        }
    
       

    } catch (error) {
        console.error("Error in tracking ops: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};