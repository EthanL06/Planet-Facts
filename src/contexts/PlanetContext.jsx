import React, { useContext, useState, useEffect } from "react";
import planetData from "../data.json";
import PlanetIcons from "../planet-icons";

const bgColors = {
  mercury: "bg-aquamarine",
  venus: "bg-yellow",
  earth: "bg-purple",
  mars: "bg-dark-red",
  jupiter: "bg-light-red",
  saturn: "bg-crimson",
  uranus: "bg-teal",
  neptune: "bg-blue",
};

const beforeColors = {
  mercury: "before:bg-aquamarine",
  venus: "before:bg-yellow",
  earth: "before:bg-purple",
  mars: "before:bg-dark-red",
  jupiter: "before:bg-light-red",
  saturn: "before:bg-crimson",
  uranus: "before:bg-teal",
  neptune: "before:bg-blue",
};

const PlanetContext = React.createContext();

export function PlanetProvider({ children }) {
  const [planet, planetSetter] = useState("mercury");
  const [data, setData] = useState({});

  const [bgColor, setBgColor] = useState(bgColors[planet]);
  const [beforeColor, setBeforeColor] = useState(beforeColors[planet]);

  const [image, setImage] = useState(PlanetIcons.mercury[0]);
  const [geologyImg, setGeologyImg] = useState(PlanetIcons.mercury[2]);
  const [button, setButton] = useState(0);

  const setPlanet = (pla) => {
    if (!planetData.some((p) => p.name.toLowerCase() === pla.toLowerCase())) {
      planetSetter("mercury");
      return false;
    } else planetSetter(pla);

    return true;
  };

  useEffect(() => {
    planetData.forEach((el) => {
      if (el.name.toLowerCase() === planet.toLowerCase()) {
        const stats = {
          rotation: el.rotation,
          revolution: el.revolution,
          radius: el.radius,
          temperature: el.temperature,
        };

        switch (button) {
          case 0:
            setData({
              content: el.overview.content,
              source: el.overview.source,
              ...stats,
            });
            setImage(PlanetIcons[planet.toLowerCase()][0]);
            break;
          case 1:
            setData({
              content: el.structure.content,
              source: el.structure.source,
              ...stats,
            });
            setImage(PlanetIcons[planet.toLowerCase()][1]);
            break;
          case 2:
            setData({
              content: el.geology.content,
              source: el.geology.source,
              ...stats,
            });
            setImage(PlanetIcons[planet.toLowerCase()][0]);
            break;
          default:
            return;
        }

        setGeologyImg(PlanetIcons[planet.toLowerCase()][2]);
        setBgColor(bgColors[planet.toLowerCase()]);
        setBeforeColor(beforeColors[planet.toLowerCase()]);
      }
    });
  }, [planet, button]);

  const showInfo = () => {
    document.querySelector("#information").classList.remove("hidden");
  };

  const hideInfo = () => {
    document.querySelector("#information").classList.add("hidden");
  };

  return (
    <PlanetContext.Provider
      value={{
        setPlanet,
        planet,
        showInfo,
        hideInfo,
        data,
        image,
        geologyImg,
        setButton,
        button,
        bgColor,
        beforeColor,
      }}
    >
      {children}
    </PlanetContext.Provider>
  );
}

export const usePlanetContext = () => useContext(PlanetContext);
