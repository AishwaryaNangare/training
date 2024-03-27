import jwt from "jsonwebtoken";
import User from "../model/User.js";

async function requireAuth(req, res, next) {
    try {
        // Read token
        const token = req.cookies.Authorization;
        // Decode token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // Find user using decoded sub
        const user = await User.findById(decoded.sub);
        if (!user) {
            return res.status(401).send("Unauthorized");
        }
        // Attach user to request
        req.user = user;
        // Continue to the next middleware
        next();
    } catch (err) {
        res.status(401).send("Unauthorized");
    }
}

export default requireAuth;
                             