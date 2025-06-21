import User from "../models/user.model.js";

const registerUser = async (req, res) => {

    try {
        const { email, username, password, fullName } = req.body;
        const userexits = await User.findOne({ email });

        if (userexits) {
            res.status(409).json({ message: "User already exits" });
        }

        const user = new User({ email, username, password, fullName });
        const { unHashedToken, hashedToken, tokenExpiry } = user.generateTemporaryToken();

        user.emailVerificationToken = hashedToken;
        user.emailVerificationExpiry = tokenExpiry;


        await user.save();

        // send email
        res.status(201).json({
            message: "User registered successfully",
            user, // Send if needed for testing; usually, you'd email this
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userexits = await User.findOne({ email });
        if (!userexits) {
            res.status(400).json({ message: "User not exits" });
        }

        const isPasswordMatch = await user.isPasswordCorrect(password);
        if (!isPasswordMatch) {

            res.status(400).json({ message: "Pawwword not Matched" });

        }

        

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Login Error" });
    }
}

const logoutUser = async (req, res) => {
    try {

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Logout user" });
    }
}

const emailVerification = async (req, res) => {
    try {

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Email not verifies" });
    }
}