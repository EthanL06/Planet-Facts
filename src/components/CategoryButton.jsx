import { usePlanetContext } from "../contexts/PlanetContext";

const CategoryButton = ({ title, active, number }) => {
  const { beforeColor } = usePlanetContext();

  return (
    <button
      className={`heading-3 category-link select-none opacity-75 transition-all duration-200 ease-in-out hover:opacity-100 ${
        active && `${beforeColor}`
      }`}
    >
      {title}
    </button>
  );
};
export default CategoryButton;
