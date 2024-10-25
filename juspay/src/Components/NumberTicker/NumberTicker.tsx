import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface NumberTickerProps {
  endValue: number;
  duration?: number;
}

/*
 * Create the Number Ticker Animation using Framer Motion APIs
 *
 * TODO: The same could also be created with CSS keyframes,
 * however for the purpose of this assignment, I decided to use
 * Framer Motion for faster implementation
 */

export function NumberTicker({ endValue, duration = 2 }: NumberTickerProps) {
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0.1 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(endValue);
  }, [spring, endValue]);

  return (
    <div className="text-inherit">
      <motion.div className="text-inherit" aria-live="polite">
        {display}
      </motion.div>
    </div>
  );
}
