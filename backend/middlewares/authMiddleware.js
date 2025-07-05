// Import jsonwebtoken
import jwt from "jsonwebtoken";

// Verify token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // get only the <token>

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        console.log("Token invalid or expired", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

export default verifyToken;