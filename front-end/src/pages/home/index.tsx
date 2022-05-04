import React, { useState, useEffect } from "react";
import { Button, Input } from "../../Components";
import { getCepByApi } from "../../services/";
import { ICep } from "../../interfaces";
import { FcSearch } from "react-icons/fc";

export const Home = () => {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState<ICep | any>("");

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (input === "") {
      console.log(input);
      alert("Preencha algum cep ");
      return;
    }

    try {
      const result = await getCepByApi(input);
      setCep(result);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar");
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen ">
      <p className="text-5xl animate-bounce text-teal-50 ">
        Welcome - Rede D'or challenge
      </p>
      <section className=" flex flex-col  gap-5">
        <h1 className="text-8xl text-center text-white ">Buscador de CEP</h1>
        <div className="flex gap-2 justify-center  ">
          <Input
            className="border text-center shadow-lg  bg-gray-700 rounded-full border-dotted text-white p-3 "
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="Digite o  cep..."
          />
          <Button click={handleSearch}>
            <FcSearch size="25" />
          </Button>
        </div>
        <form className=" bg-gradient-to-b  from-indigo-100 flex flex-col gap-4 mt-4  rounded-lg p-4  mx-64 ">
          <div className="text-2xl flex flex-col gap-2 ">
            <h2 className="text-4xl">CEP :{cep.code}</h2>
            <span>State :{cep.state}</span>
            <span>City :{cep.city} </span>
            <span>District : {cep.district}</span>
            <span>Address :{cep.address}</span>
          </div>
        </form>
      </section>
    </div>
  );
};
