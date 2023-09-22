import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

import { BreakingStates } from "./Experience";

type Props = {
  breakingState: BreakingStates;
  setBreakingState: React.Dispatch<React.SetStateAction<BreakingStates>>;
};
const stateToTextMap = {
  original: "Shatter expectations",
  breaking: "Revert expectations",
  fixing: "Reverting",
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -10,
    transition: {
      type: "tween",
      duration: 2,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 2,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 5,
      duration: 2,
    },
  },
};

export const TitleSequence = ({ breakingState, setBreakingState }: Props) => {
  return (
    <Html fullscreen>
      <motion.div
        initial="hidden"
        animate="show"
        transition={{
          delayChildren: 1,
          staggerChildren: 0.2,
        }}
        className="flex absolute flex-col items-center w-full top-[100px]"
      >
        <div className="flex items-end">
          <motion.p
            variants={textVariants}
            className="pr-2 text-2xl text-black"
          >
            2D
          </motion.p>
          <motion.p variants={textVariants} className="pr-2 text-black">
            is
          </motion.p>
          <motion.p variants={textVariants} className="text-2xl text-black">
            boring
          </motion.p>
          <motion.p variants={textVariants} className="text-2xl text-black">
            .
          </motion.p>
        </div>

        <motion.button
          variants={buttonVariants}
          className="py-1 mt-4 w-60 text-black rounded border-2 border-black border-solid transition-all hover:text-white hover:bg-black"
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
        </motion.button>
      </motion.div>
    </Html>
  );
};
