import SavedSchema from "../models/saved.model.js";
const savedSong = async (req, res) => {
    try {
        const { songname, songid, avatar } = req.body;
        const createdBy = req.user && req.user._id;

        if (!createdBy) {

            return res.status(200).json({ message: "User not found" });

        }

        const alreadySaved = await SavedSchema.findOne({ songid, createdBy });


        if (alreadySaved) {
            return res.status(409).json({ message: "Song already saved by this user" });
        }

        const savedschema = new SavedSchema({ songname, songid, avatar, createdBy });

        await savedschema.save();

        res.status(201).json({
            message: "Song is Saved",
            savedschema, // Send if needed for testing; usually, you'd email this
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export default savedSong;