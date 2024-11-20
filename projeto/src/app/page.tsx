"use client";
import Header from "@/components/Header";
import { useState } from "react";


function MeuBotao() {
  return (
    <button className="bg-indigo-50 p-3 rounded-lg text-cyan-600 font-bold hover:bg-indigo-200 hover:text-cyan-700 hover:active:bg-indigo-300 transition-all ">
      Sou um Botão
    </button>
  );
}

export default function Home() {
  const names = ["React", "Next.js", "TailwindCSS"];
  const [likes, setLikes] = useState(0);
  function handleCLick() {
    setLikes(likes + 1);
  }
  return (
    <main className="flex flex-col gap-8 min-h-screen bg-indigo-600">
      <Header/>

      <div className="container mx-auto p-6 bg-blue-800 items-center ">
        <MeuBotao />
        <ul className="m-12 text-indigo-50">
          {names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <button
          className="m-2 bg-blue-500 text-white font-bold py-2 px-4 rounded active:bg-blue-600"
          onClick={handleCLick}
        >
          Likes {likes}
        </button>
      </div>
    </main>
  );
}
