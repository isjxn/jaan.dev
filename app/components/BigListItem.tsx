import React from "react"

export default function BigListItem({ element }: { element: React.ReactElement }) {
  return (
    <li className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-2 px-6">{element}</li>
  );
}