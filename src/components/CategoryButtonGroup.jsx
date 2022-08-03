import { usePlanetContext } from "../contexts/PlanetContext";

import CategoryButton from "./CategoryButton";

const CategoryButtonGroup = () => {
  const { button, setButton } = usePlanetContext();

  return (
    <div className="flex w-full justify-between border-b-2 border-b-dark-gray py-6 pl-8 pr-10 text-xs sm:hidden">
      <div onClick={() => setButton(0)}>
        <CategoryButton title={"Overview"} active={button === 0} number={0} />
      </div>
      <div onClick={() => setButton(1)}>
        <CategoryButton title={"Structure"} active={button === 1} number={1} />
      </div>
      <div onClick={() => setButton(2)}>
        <CategoryButton title={"Surface"} active={button === 2} number={2} />
      </div>
    </div>
  );
};
export default CategoryButtonGroup;
