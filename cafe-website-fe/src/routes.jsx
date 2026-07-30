import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ReservePage from "./pages/reservation";
import MenuPage from "./pages/menu";
import CoffeePage from "./pages/coffee";
import PastryPage from "./pages/pastry";
import TeaPage from "./pages/tea";
import PastaPage from "./pages/pasta";
import AccessoriesPage from "./pages/accessories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "reservation", element: <ReservePage /> },
      { path: "menu/:menuType", element: <MenuPage /> },
      { path: "coffee", element: <CoffeePage /> },
      { path: "pastry", element: <PastryPage /> },
      { path: "tea", element: <TeaPage /> },
      { path: "pasta", element: <PastaPage /> },
      { path: "accessories", element: <AccessoriesPage /> },
    ]
  }
]);

export default router;
