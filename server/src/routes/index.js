import authRoute from "./authRoute.js";

export default function createRoute(app) {
  app.use("/api/v1/auth", authRoute);
}
