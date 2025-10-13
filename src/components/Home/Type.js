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
        deleteSpeed:40,
        delay: 20, // <-- decrease this value for faster typing (default ~50-100)

      }}
    />
  );
}

export default Type;
