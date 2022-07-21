import React, { useEffect, useState } from "react";
import useSizing from "../hooks/Sizing";
import GameCanvas from "../svg/Game";

const GamePage = () => {
  const [width, height] = useSizing();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const ratio = 1.7;
    if (width / height > ratio) {
      setSize({
        width: height * ratio,
        height: height,
      });
    } else {
      setSize({
        width: (width * 0.9),
        height: (width * 0.9) / ratio,
      });
    }
  }, [width, height]);

  return (
    <>
      <GameCanvas width={size.width} height={size.height} />
    </>
  );
};

export default GamePage;
