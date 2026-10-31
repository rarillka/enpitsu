"use client";

// import Link from "next/link";

import "./styles.css";

export default function Btn_v1_sm({
  btn_text,
  text_color = "#ffffff",
  stroke_color = "#2f2019",
}) {
  return (
    <div className="btn-v1-sm cursor-pointer bg-no-repeat">
      <button
        className="cursor-pointer font-sjz"
        style={{ color: text_color, WebkitTextStroke: `2.5px ${stroke_color}` }}
      >
        {btn_text}
      </button>
    </div>
  );
}
