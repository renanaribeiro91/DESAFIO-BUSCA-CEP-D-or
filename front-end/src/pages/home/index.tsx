import React, { useState, useEffect } from "react";
import { Button } from "../../Components";
import { getCepByApi } from "../../services/";

export const Home = () => {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState("");

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (input === "") {
      console.log(input);
      alert("Preencha algum cep ");
      return;
    }

    const result = await getCepByApi(input)
      .then((results) => {
        setCep(results);
        setInput("");
        console.log(Object.values(results));
      })
      .catch((err) => {
        alert("Erro ao buscar");
        setInput("");
      });
  };

  return (
    <div className="w-full h-screen ">
      <p className="text-5xl animate-bounce text-teal-50 ">
        Welcome - Rede D'or challenge
      </p>
      <section className=" flex flex-col  gap-5">
        <h1 className="text-8xl text-center text-white ">Buscador de CEP</h1>
        <div className="flex gap-2 justify-center  ">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
            className="border text-center shadow-lg  bg-gray-700 rounded-full border-dotted text-white p-3 "
            placeholder="Digite o  cep..."
          />
          <Button click={handleSearch} />
        </div>
        <form className=" bg-gradient-to-b  from-indigo-100 flex flex-col gap-4 mt-4  rounded-lg p-4  mx-64 ">
          {/* {Object.values(cep).map((elem: any, index: any) => {
            return ( */}
          <div className="text-2xl flex flex-col gap-2 ">
            <h2 className="text-4xl">CEP :</h2>
            <span>State :</span>
            <span>City : </span>
            <span>District : </span>
            <span>Address :</span>
          </div>
          {/* );
          })} */}
        </form>
      </section>
    </div>
  );
};
