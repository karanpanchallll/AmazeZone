import jwt from "jsonwebtoken";

import USER from "../models/userSchema.js"





const authenticate = async (req, res, next) => {
    try {
        const secretKey = process.env.KEY;
      console.log("Cookies received:", req.cookies); // Log cookies
      const token = req.cookies.Amazonweb;
      console.log("Token extracted:", token);
  
      if (!token) throw new Error("Token not found");
  
      const verifyToken = jwt.verify(token, secretKey);
      console.log("Token verified:", verifyToken);
  
      const rootUser = await USER.findOne({ _id: verifyToken._id, "tokens.token": token });
      console.log("Root user found:", rootUser);
  
      if (!rootUser) throw new Error("User not found");
  
      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
  
      next();
    } catch (error) {
      console.error(error.message);
      res.status(401).json({ error: "Unauthorized: No token provided" });
    }
  };
  



 export default authenticate;
