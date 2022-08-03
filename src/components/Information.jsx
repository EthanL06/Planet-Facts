import { useEffect } from "react";
import { usePlanetContext } from "../contexts/PlanetContext";

import ButtonGroup from "./ButtonGroup";
import StatGroup from "./StatGroup";
import CategoryButtonGroup from "./CategoryButtonGroup";

import sourceIcon from "../assets/icons/icon-source.svg";

const Information = () => {
  const { setPlanet, planet, data, image, geologyImg, button } =
    usePlanetContext();

  useEffect(() => {
    if (!setPlanet(window.location.pathname.split("/")[1])) {
      window.history.pushState(null, null, `/`);
    }
  }, []);

  return (
    <>
      <CategoryButtonGroup />

      <main className="flex w-full flex-col items-center gap-8 px-6 sm:gap-6 md:px-10 lg:px-40 xl:px-56">
        <div className="flex w-full flex-col items-center justify-between gap-20 pt-20 md:flex-row">
          <div className="flex h-[24rem] max-w-[28rem] flex-grow items-center justify-center sm:max-w-none md:h-[40rem]">
            <img src={image} alt={planet} className="sm:h-[26rem] md:h-auto" />
            <img
              className={`${
                button !== 2 && "hidden"
              } absolute top-[500px] h-[12.4375rem] w-[10.1875rem] sm:top-[530px] md:top-[595px]`}
              src={geologyImg}
              alt={`${planet} geology`}
            />
          </div>
          <div className="flex w-full items-center justify-between gap-8 sm:h-[16rem] sm:flex-row md:h-auto md:w-[22.5rem] md:flex-col md:items-stretch">
            <div className="flex w-full flex-col gap-4 text-center sm:w-1/2 sm:px-0 sm:text-left md:w-full">
              <div className="heading">{planet}</div>
              <div className="font-light leading-7 sm:leading-normal">
                {data?.content}
              </div>
              <div className="mt-2 font-light opacity-50 md:mt-0">
                Source :{" "}
                <a href={data?.source} target="_blank" rel="noreferrer">
                  <span className="font-bold underline">Wikipedia</span>{" "}
                  <img src={sourceIcon} alt="source" className="inline-block" />
                </a>
              </div>
            </div>
            <ButtonGroup />
          </div>
        </div>
        <StatGroup />
      </main>
    </>
  );
};
export default Information;
