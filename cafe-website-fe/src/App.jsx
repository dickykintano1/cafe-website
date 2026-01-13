import { Outlet, Link } from "react-router-dom";
import ScrollToTop from './components/scrollToTop'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}
