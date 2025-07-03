import { User } from "../models/user.model.js";
import { sendEmail, emailVerificationMailgenContent } from "../utils/mail.js";

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

        const verificationUrl = `${process.env.CLIENT_ORIGIN}/VerifyEmail/${hashedToken}`;

       

        // Send verification email
        await sendEmail({
            email: user.email,
            subject: "Verify your email",
            mailgenContent: emailVerificationMailgenContent(user.username, verificationUrl),
        });


        res.status(201).json({
            message: "User registered successfully",
            user, // Send if needed for testing; usually, you'd email this
            success: true,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "User not exits" });
        }

        const isPasswordMatch = await user.isPasswordCorrect(password);
        if (!isPasswordMatch) {

            res.status(400).json({ message: "Pawwword not Matched" });

        }
        if (!user.isEmailVerified) {
            res.status(400).json({ message: "Email Not verified" });
        }


        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save();

   const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    };


        res.cookie("accessToken", accessToken, cookieOptions);
        res.cookie("refreshToken", refreshToken, cookieOptions);
        res.status(200).json({
            message: "Login successful.",
            user,
            success: true,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Login Error" });
    }
}

const logoutUser = async (req, res) => {
    try {
        const userId = req.user?._id;
        console.log(":logoutUser started");
        if (userId) {
            await User.findByIdAndUpdate(userId, { refreshToken: null });
        }
        res.clearCookie("accessToken", { httpOnly: true });
        res.clearCookie("refreshToken", { httpOnly: true });
        return res.status(200).json({
            status: true,
            message: "Logged out successfully.",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Logout user" });
    }
}

const emailVerification = async (req, res) => {
    try {
        const token = req.params.token;
  console.log("email constreoller");
        const user = await User.findOne({
            emailVerificationToken: token,
            emailVerificationExpiry: { $gt: Date.now() },
        })

        if (!user) {
            res.status(400).json({ message: "user not exits" });

        }
        user.isEmailVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiry = undefined;
        await user.save();
        res.status(200).json({ message: "User is verifies" });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Email not verifies" });
    }
}

const getme = async (req, res) => {

    try {

        const userId = req.user?._id;
        const user = await User.findById(userId);

        if (!user) {
            return res
                .status(404)                      // 404 “Not Found” is more semantically correct than 401 here
                .json({ message: "User not found" });
        }


        res.status(200).json({
            message: "User is verifies",
            user,
            success: true,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error In finding user" });
    }


}


export {
    loginUser,
    logoutUser,
    emailVerification,
    registerUser,
    getme,
};