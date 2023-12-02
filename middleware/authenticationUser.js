import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/customeError.js";

export const authenticationUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
  try {
    const { userId, name } = verifyToken;
    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};
