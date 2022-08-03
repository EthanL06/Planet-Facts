import Button from "./Button";

import { usePlanetContext } from "../contexts/PlanetContext";

const ButtonGroup = () => {
  const { setButton, button } = usePlanetContext();

  return (
    <div className="hidden flex-grow flex-col gap-4 sm:flex">
      <div onClick={() => setButton(0)}>
        <Button number={"01"} text={"Overview"} active={button === 0} />
      </div>
      <div onClick={() => setButton(1)}>
        <Button
          number={"02"}
          text={"Internal Structure"}
          active={button === 1}
        />
      </div>
      <div onClick={() => setButton(2)}>
        <Button number={"03"} text={"Surface Geology"} active={button === 2} />
      </div>
    </div>
  );
};
export default ButtonGroup;
