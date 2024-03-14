import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "unauthorized , no token provided" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export default protectRoute;
