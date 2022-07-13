// importing the User model
import User from '../models/User.js';

export const signup = (req, res) => {
    const { email, password, confirmPassword, username } = req.body;
}