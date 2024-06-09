import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export const Counter = ({
    value,
    visible,
  }: {
    value: number;
    visible: boolean;
  }) => {
    const [animatedValue, setAnimatedValue] = useState<number>(0);
  
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: visible ? value : 0 },
      delay: 1000,
      config: { duration: 2000 },
      onRest: () => setAnimatedValue(value),
    });
  
    return (
        <animated.span>
          {number.interpolate((val) => Math.floor(val))}
        </animated.span>
    );
  };