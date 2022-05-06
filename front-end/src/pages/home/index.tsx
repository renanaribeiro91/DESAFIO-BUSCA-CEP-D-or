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
      alert("Preencha algum cep ");
    } else if (input.length < 8) {
      alert("Faltando digito");
      setInput("");
      return;
    }

    try {
      const result = await getCepByApi(input);
      console.log(result);
      if (result.status === 400) {
        alert("Cep invalido");
        setInput("");
      } else if (result.status === 404) {
        alert("Cep não encontrado");
        setInput("");
      } else if (result.status === 200) {
        alert("Cep encontrado");
        setCep(result);
        setInput("");
      } else {
        alert("Erro ao buscar");
      }
    } catch (error) {
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen ">
      <section className=" flex flex-col  gap-5">
        <h1 className="text-8xl text-center text-white ">Search zip code</h1>
        <div className="flex gap-2 justify-center  ">
          <Input
            className="border text-center shadow-lg  bg-gray-700 rounded-full border-dotted text-white p-2 "
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="Type your code..."
          />
          <Button click={handleSearch} aria-label="search">
            <FcSearch size="25" />
          </Button>
        </div>
        <form className=" bg-gradient-to-b  from-indigo-100 flex flex-col gap-4 mt-4  rounded-lg p-4  mx-64 h-72">
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
