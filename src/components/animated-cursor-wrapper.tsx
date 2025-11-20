"use client";

import AnimatedCursor from "react-animated-cursor";

export function AnimatedCursorWrapper() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="255, 255, 255"
      outerAlpha={0}
      innerScale={1}
      outerScale={1.7}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      innerStyle={{
        mixBlendMode: "exclusion",
      }}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
}
