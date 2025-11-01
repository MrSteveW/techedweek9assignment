import * as motion from "motion/react-client";
import { ReactNode } from "react";

type childrenType = {
  children: ReactNode;
};

export default function Gestures({ children }: childrenType) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.2 }}>
      {children}
    </motion.div>
  );
}
