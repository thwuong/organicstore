import { createBrowserRouter } from "react-router-dom";
import RequiredAuth from "./RequireAuth";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <RequiredAuth>
        <div>
          <h1>admin</h1>
        </div>
      </RequiredAuth>
    ),
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
]);
