import jwt from "jsonwebtoken";

export function verifyAccesstoken(req, res, next) {
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
export function verifyRefreshToken(req, res, next) {
  const refreshToken = req.cookies.jwt;

  try {
    if (!refreshToken) {
      return res.status(404).json({
        success: false,
        message: "refresh token not found",
      });
    }

    const userEmail = jwt.verify(refreshToken, process.env.SECRET_JWT);

    if (!userEmail) {
      return res.status(401).json({
        success: false,
        message: "refresh token invalid",
      });
    }
    req.userEmail = userEmail;
    next();
  } catch (error) {
    next(error);
  }
}
export function generateTokens(payload) {
  const accessToken = jwt.sign({ email: payload }, process.env.SECRET_JWT, {
    expiresIn: "10m",
  });
  const refreshToken = jwt.sign({ email: payload }, process.env.SECRET_JWT, {
    expiresIn: "1d",
  });

  return { accessToken, refreshToken };
}
