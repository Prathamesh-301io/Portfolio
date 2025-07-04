import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import SecurityWrapper from "./components/SecurityWrapper";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <SecurityWrapper>
          <Layout />
        </SecurityWrapper>
      }
    >
      <Route index element={<Homepage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
