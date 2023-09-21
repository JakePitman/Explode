import { Html } from "@react-three/drei";

import { BreakingStates } from "./Experience";

type Props = {
  breakingState: BreakingStates;
  setBreakingState: React.Dispatch<React.SetStateAction<BreakingStates>>;
};
const stateToTextMap = {
  original: "Break me",
  breaking: "Fix me",
  fixing: "Fixing..",
};

export const TitleSequence = ({ breakingState, setBreakingState }: Props) => {
  return (
    <Html fullscreen>
      <div className="flex absolute justify-center w-full top-[100px]">
        <button
          className="py-1 px-5 text-black rounded border-2 border-black border-solid transition-all hover:text-white hover:bg-black"
          onClick={() => {
            if (breakingState === "original") {
              setBreakingState("breaking");
            } else if (breakingState === "breaking") {
              setBreakingState("fixing");
            }
          }}
          disabled={breakingState === "fixing"}
        >
          {stateToTextMap[breakingState]}
        </button>
      </div>
    </Html>
  );
};
