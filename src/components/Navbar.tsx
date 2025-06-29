import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

/* framer motion */
import { motion } from "framer-motion";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Navbar fluid rounded className="mx-auto max-w-[96rem]">
        <NavbarBrand href="/">
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="hidden self-center text-xl font-semibold whitespace-nowrap sm:flex dark:text-white">
            Wurie Bah
          </span>
        </NavbarBrand>
        <div className="flex gap-2 md:order-2">
          <Link to={"https://wa.me/message/7MOAKV5Y5G2LO1"} target="_blank">
            <Button color="yellow" outline className="flex items-center gap-3">
              <span>Let's talk</span>
              <HiMiniChatBubbleLeftEllipsis />
            </Button>
          </Link>
          <NavbarToggle />
        </div>
        <NavbarCollapse className="z-[200]">
          <NavLink to={"/"}>
            <span className="text-xl dark:text-gray-200">Home</span>
          </NavLink>
          <NavLink to={"/"}>
            <span className="text-xl dark:text-gray-200">About</span>
          </NavLink>
          <NavLink to={"/"}>
            <span className="text-xl dark:text-gray-200">Portfolio</span>
          </NavLink>
          <NavLink to={"/"}>
            <span className="text-xl dark:text-gray-200">Contact</span>
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </motion.div>
  );
};

export default NavBar;
