import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Final-Year Software Engineering Student",
          "Final-Year Software Engineering Student",
          "Final-Year Software Engineering Student",
          "Final-Year Software Engineering Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
