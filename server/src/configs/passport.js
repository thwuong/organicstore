import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  try {
    let authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];

    const user = jwt.verify(token, process.env.SECRET_JWT);

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
export function genarateToken(payload) {
  return jwt.sign({ email: payload }, process.env.SECRET_JWT, {
    expiresIn: "30m",
  });
}
export function genarateRefeshToken(payload) {
  return jwt.sign({ email: payload }, process.env.SECRET_JWT, {
    expiresIn: "2d",
  });
}
