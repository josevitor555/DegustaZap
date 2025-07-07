// Import jsonwebtoken
import jwt from "jsonwebtoken";

// Verify token
const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({ message: 'No token provided' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No token provided' });

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userId = decoded.id;
        next();

    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyToken;

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     const token = authHeader && authHeader.split(" ")[1]; // get only the <token>

//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_KEY);
//         req.user = { id: decoded.id };
//         next();
//     } catch (error) {
//         console.log("Token invalid or expired", error);
//         return res.status(403).json({ message: "Invalid or expired token" });
//     }
// }