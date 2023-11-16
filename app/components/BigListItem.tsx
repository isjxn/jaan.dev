import React from "react"
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
})

export default function BigListItem({ element }: { element: React.ReactElement }) {
  return (
    <li className={`font-weight-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-2 px-6 ${sourceCodePro.className}`}>{element}</li>
  );
}