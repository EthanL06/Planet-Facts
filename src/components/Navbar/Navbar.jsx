import "./Navbar.css";

import { useState } from "react";
import { usePlanetContext } from "../../contexts/PlanetContext";

import NavbarMenuItem from "./NavbarMenuItem";
import menu from "../../assets/icons/icon-hamburger.svg";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const colors = [
  "#DEF4FC",
  "#F7CC7F",
  "#545BFE",
  "#FF6A45",
  "#FCCB6B",
  "#ECAD7A",
  "#65F0D5",
  "#497EFA",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPlanet, showInfo, hideInfo } = usePlanetContext();

  const handleMenuClick = (e) => {
    setIsOpen(!isOpen);
    e.target.classList.toggle("filter-dark-gray");

    if (!isOpen) {
      hideInfo();
    } else {
      showInfo();
    }
  };

  const handleLinkClick = (planet) => {
    setIsOpen(false);
    document
      .querySelector("#navbar-menu > img")
      .classList.remove("filter-dark-gray");

    setPlanet(planet);
    showInfo();
  };

  return (
    <>
      <nav className="flex w-full items-center justify-between border-b-2 border-b-dark-gray pl-8 pr-10 pt-5 pb-7 sm:flex-col md:flex-row">
        <a className="heading-2 text-[2.75rem]" href="/">
          The Planets
        </a>

        <div className="heading-4 mx-2 mt-9 hidden flex-row justify-evenly gap-8 text-xs sm:flex md:mx-4 md:mt-0">
          {planets.map((planet, index) => {
            return (
              <div
                key={index}
                className={`md:nav-link select-none opacity-75 transition-all duration-200 ease-in-out hover:opacity-100 hover${
                  index + 1
                } hover:cursor-pointer`}
                onClick={() => handleLinkClick(planet)}
              >
                <div
                  onClick={() => {
                    window.history.pushState(
                      null,
                      null,
                      `/${planet.toLowerCase()}`
                    );
                  }}
                >
                  {planet}
                </div>
              </div>
            );
          })}
        </div>

        <button
          id="navbar-menu"
          className="block h-[30.6px] w-[43.2px] select-none sm:hidden"
          onClick={(e) => handleMenuClick(e)}
        >
          <img src={menu} alt="Menu" height={30.6} width={43.2} />
        </button>
      </nav>

      {/* Navigation Menu */}

      <div
        className={`z-100 absolute top-[10.75em] flex w-full flex-col bg-violet px-8 sm:hidden ${
          !isOpen && "hidden"
        }`}
      >
        {planets.map((planet, index) => {
          return (
            <NavbarMenuItem
              key={index}
              name={planet}
              last={index === planets.length - 1}
              color={colors[index]}
              click={handleLinkClick}
            />
          );
        })}
      </div>
    </>
  );
};
export default Navbar;
