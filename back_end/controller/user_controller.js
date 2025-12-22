const { json } = require("body-parser");
const UserService = require("../services/user_services")


exports.register = async (req, res, next) => { //module.exports.register = register;
    try {

        const { email, password } = req.body;
        //const email = req.body.email;
        //const password = req.body.password;


        const successRes = await UserService.registerUser(email, password);

        res.json({ status: true, success: "user registered successfully" });

    } catch (error) {
        throw error
    }
}

exports.login = async (req, res, next) => { //module.exports.register = register;
    try {

        const { email, password } = req.body;

        const user = await UserService.checkUser(email);

        if (!user) {
            throw new Error('User doesnt exist');
        }

        const isMatch = await user.comparePassword(password);

        if (isMatch === false) {
            throw new Error('Password invalid');
        }

        let tokenData = { _id: user._id, email: user.email }

        const token = await UserService.generateToken(tokenData, 'secretKey', '1000h')

        res.status(200).json({status:true, token:token})

    } catch (error) {
        throw error
    }
}