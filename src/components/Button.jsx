import { usePlanetContext } from "../contexts/PlanetContext";

const Button = ({ number, text, active }) => {
  const { bgColor, activeColor } = usePlanetContext();

  return (
    <button
      className={`heading-3 flex w-full border border-gray ${
        active && bgColor
      } py-3 text-[0.75rem] uppercase text-white hover:border-dark-gray hover:bg-dark-gray active:border-opacity-0 ${activeColor} `}
    >
      <div className="mx-7 opacity-50">{number}</div>
      {text}
    </button>
  );
};
export default Button;
