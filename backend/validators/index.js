import { body } from "express-validator";

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be lowercase")
            .isLength({ min: 3 })
            .withMessage("Username must be at lease 3 characters long"),
        body("password").trim().notEmpty().withMessage("Password is required"),
        body("fullName")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Full name is required"),
    ];
};


const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Email is invalid"),
        body("username").optional(),
        body("password").notEmpty().withMessage("Password is required"),
    ];
};

const savedSongValidator = () => {
    return [
        body("songname").notEmpty().isString().withMessage('songname is not validated'),
        body("songid").notEmpty().isNumeric().withMessage('songid is not validated'),
        body("avatar").optional()
            .isString().withMessage('avatar is not validated')
            .trim(),
    ]
}

export {
    savedSongValidator,
    userLoginValidator,
    userRegisterValidator,

};
