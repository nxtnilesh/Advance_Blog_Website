import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Search, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar fluid rounded className="border-b-2 right-1 left-1 absolute w-full top-1">
      <NavbarBrand as={Link} href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white bg-gradient-to-r from-green-300 via-emerald-700 to-green-950 px-2 rounded text-white py-1">
          Mern Blog
        </span>
      </NavbarBrand>
      <form>
        <TextInput
          placeholder="Search.."
          rightIcon={Search}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <Search />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button pill className="hidden lg:inline " size="medium" color="gray">
          <Moon />
        </Button>
        <Button outline gradientDuoTone="greenToBlue">
          SignIn
        </Button>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active={path === "/"}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" active={path === "/about"}>
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
