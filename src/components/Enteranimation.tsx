import * as motion from "motion/react-client";
import { ReactNode } from "react";

type childrenType = {
  children: ReactNode;
};

const textStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center" as const,
};

export default function EnterAnimation({ children }: childrenType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        y: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      style={textStyle}
    >
      {children}
    </motion.div>
  );
}
