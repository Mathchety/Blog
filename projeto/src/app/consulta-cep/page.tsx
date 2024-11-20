"use client";

import api from "@/api/api";
import Header from "@/components/Header";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface DataCep {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}
export default function Cep() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState<DataCep>({});

  async function handleSearch() {
    if (cep.length !== 8) {
      alert("CEP deve conter 8 números");
      return;
    }
    try {
      const response = await api.get(`${cep}/json`);
      if (response.data.erro == "true") {
        throw new Error("CEP não encontrado");
      }
      setData(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  }

function handleKeyPress(event: any) {
 if (event.keyCode === 13) {
  event.preventDefault();
   handleSearch();
 }
}

  return (
    <main className="flex flex-col gap-8 min-h-screen bg-indigo-800">
      <Header />
      <div className="container mx-auto p-6  items-center ">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-50 ">
          Consulta CEP
        </h1>
        <h2 className="text-2xl text-indigo-50">Buscar endereço pelo CEP:</h2>
        <div className="flex mt-5 p-5  rounded-md w-100">
          <input
            type="text"
            className="text-black h-12 flex-grow p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Digite o CEP"
            onChange={(e) => setCep(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="h-12 bg-indigo-500 text-white rounded-r-lg px-2 flex justify-center items-center hover:bg-indigo-600 transition duration-200 "
            onClick={handleSearch}
          >
            <FiSearch size={25} />
          </button>
        </div>
        {Object.keys(data).length > 0 && (
          <div className="mt-10 bg-slate-100 text-cyan-950 p-10 rounded-lg flex flex-col items-center max-w-2xl mx-auto shadow-md">
            <h2 className="text-3xl mb-4">CEP: {data.cep}</h2>
            <p className="text-lg">Logradouro: {data.logradouro}</p>
            <p className="text-lg">Complemento: {data.complemento}</p>
            <p className="text-lg">Bairro: {data.bairro}</p>
            <p className="text-lg">
              Cidade/UF: {data.localidade} - {data.uf}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
