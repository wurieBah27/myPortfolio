import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Applayout = () => {
  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[500] w-full px-1 py-1 sm:px-4">
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Applayout;
