"use client";

import React, { useState } from "react";

const FontToggler: React.FC = () => {
  const [isBold, setIsBold] = useState(false);

  const toggleFontWeight = () => {
    setIsBold(!isBold);
  };

  return (
    <div>
      <button onClick={toggleFontWeight}>
        {isBold ? "Disable Bold" : "Enable Bold"}
      </button>
    </div>
  );
};

export default FontToggler;
