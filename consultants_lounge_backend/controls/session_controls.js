import * as session_actions from "../models/session_models.js"


export const user_register = async (req, res)=>{
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if user already exists
        const existingUser = await session_actions.find_user_by_email(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        const newUser = await session_actions.create_user({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully.", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

export const user_login = async (req, res)=>{
 
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Find user by email
        const user = await session_actions.find_user_by_email(email);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        // Store user in session
        req.session.user = { id: user._id, email: user.email };

        res.status(200).json({ message: "Login successful", user: req.session.user });

    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
    
}

export const user_logout = async (req,res)=>{

}

export const register_dummy_users = async (req,res)=>{
    try{
        await session_actions.insert_dummy_user_data()
        res.status(200).json({ message: 'Dummy users and consultants added successfully.'});
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
    
}
export const reset_dummy_users = async (req, res)=>{
    try{
        await session_actions.reset_dummy_user_data()
        res.status(200).json({ message: 'Dummy users and consultants reset successfully.' })
    }
    catch(e){
        console.log(e)
        res.status(500).json(e)
    }
}