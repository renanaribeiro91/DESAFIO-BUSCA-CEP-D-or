import React from "react";
import ReactPlayer from "react-player";
import { Button } from "../../Components";

export const Initial = () => {
  return (
    <div className="w-full flex  ">
      <div className="flex flex-col justify-center gap-4 ">
        <p className="text-5xl animate-bounce text-teal-50 ml-14">
          Welcome - Rede D'or challenge
        </p>
        <Button className="bg-white text-xl mx-32 p-4 rounded-lg">
          <a href="http://localhost:3000/cep">Entrar</a>
        </Button>
      </div>

      <ReactPlayer
        className=""
        width="100%"
        playing={true}
        loop={true}
        height=""
        muted={true}
        url={
          "./videos/REDE D'OR SÃO LUIZ - Homenagem Especial aos Médicos e Médicas.mp4"
        }
      />
    </div>
  );
};
