"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  defaultSrc: string;
  darkSrc: string;
  width: number;
  height: number;
  wrapperClassName: string;
  imageClassName: string;
};

export default function HeroCharacter({
  defaultSrc,
  darkSrc,
  width,
  height,
  wrapperClassName,
  imageClassName,
}: Props) {
  const [toggled, setToggled] = useState(false);

  const transition =
    "transition-opacity duration-300 ease-[cubic-bezier(0,1.18,1,-0.29)]";

  return (
    <div
      className={`group relative shrink-0 cursor-pointer ${wrapperClassName}`}
      onClick={() => setToggled((prev) => !prev)}
    >
      {/* default image: hidden if toggled, otherwise hidden on hover */}
      <Image
        className={`absolute inset-0 ${imageClassName} ${transition} ${
          toggled ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        }`}
        src={defaultSrc}
        height={height}
        width={width}
        alt=""
      />
      {/* dark image: shown if toggled, otherwise shown on hover */}
      <Image
        className={`absolute inset-0 ${imageClassName} ${transition} ${
          toggled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        src={darkSrc}
        height={height}
        width={width}
        alt=""
      />
    </div>
  );
}