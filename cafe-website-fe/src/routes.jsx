import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
// import AboutPage from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      // { path: "about", element: <About /> }
    ]
  }
]);

export default router;
