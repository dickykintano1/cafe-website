import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage   from "./pages/home";
import AboutPage  from "./pages/about";
import ReservePage from "./pages/reservation";
import CoffeePage from "./pages/coffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "reservation", element: <ReservePage /> },
      { path: "coffee", element: <CoffeePage /> },
    ]
  }
]);

export default router;
