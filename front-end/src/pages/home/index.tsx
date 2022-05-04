import React from "react";
import { Button } from "../src/Components";

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

    try {
      const response = await api.get(`${input}`);
      setCep(response.data);
      setInput("");
    } catch (err) {
      alert("Erro ao buscar");
      setInput("");
    }
  };
  return (
    <div className="w-full h-screen ">
      <p className="text-5xl animate-bounce text-teal-50">Welcome</p>
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
            placeholder="digite o  cep..."
          />
          <Button click={handleSearch} />
        </div>
        <form className=" bg-gradient-to-b items-center from-indigo-100 flex flex-col gap-4 mt-4  rounded-lg p-4  m-32 ">
          <div className="text-2xl flex flex-col gap-2">
            <h2 className="text-6xl">CEP:{cep}</h2>
            <span>State : </span>
            <span>City : </span>
            <span>District : </span>
            <span>Address : </span>
          </div>
        </form>
      </section>
    </div>
  );
};
