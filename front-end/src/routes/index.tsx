import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Initial } from "./list";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/cep" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
