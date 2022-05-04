import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./list";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
