import { usePlanetContext } from "../contexts/PlanetContext";
import StatCard from "./StatCard";

const StatGroup = () => {
  const { data } = usePlanetContext();
  return (
    <div className="mb-8 flex w-full flex-col justify-between gap-2 sm:flex-row sm:gap-8">
      <StatCard title={"Rotation Time"} text={data.rotation} />
      <StatCard title={"Revolution Time"} text={data.revolution} />
      <StatCard title={"Radius"} text={data.radius} />
      <StatCard title={"Average Temp."} text={data.temperature} />
    </div>
  );
};
export default StatGroup;
