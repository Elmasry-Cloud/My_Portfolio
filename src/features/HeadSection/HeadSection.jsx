import React from "react";

export default function HeadSection({ head, dec }) {
  return (
    <>
      <div className="head mb-18 text-center">
        <h1 className="gradient-text text-6xl font-extrabold mb-3">{head}</h1>
        <p>{dec}</p>
      </div>
    </>
  );
}
