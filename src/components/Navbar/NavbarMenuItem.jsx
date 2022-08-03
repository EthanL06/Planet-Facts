import { usePlanetContext } from "../../contexts/PlanetContext";
import chevron from "../../assets/icons/icon-chevron.svg";

const NavbarMenuItem = ({ color, name, last, click }) => {
  const animate = () => {
    const main = document.querySelector("main");
    main.classList.remove("animated");
    main.classList.add("animated");
  };

  return (
    <button
      className={`mt-2 flex items-center justify-between ${
        !last && "border-b border-b-dark-gray"
      } p-4 pb-6`}
      onClick={() => {
        click(name);
        animate();
      }}
    >
      <div className="flex flex-row gap-8 md:gap-10">
        <div
          className="h-6 w-6 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <div className="heading-3 text-center text-2xl">{name}</div>
      </div>
      <div>
        <img src={chevron} alt="arrow" height={16} width={12} />
      </div>
    </button>
  );
};
export default NavbarMenuItem;
