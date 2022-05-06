/* eslint-disable testing-library/prefer-screen-queries */
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Home, Initial } from "./src/routes/list";

describe("Initial Component", () => {
  test("Verify Texts", () => {
    const { getByText } = render(<Initial />);

    expect(getByText("Welcome - Rede D'or challenge")).toBeTruthy();
  });
});

describe("Home Component", () => {
  test("Verify Texts", () => {
    const { getByText } = render(<Home />);

    expect(getByText("CEP :")).toBeTruthy();
    expect(getByText("State :")).toBeInTheDocument();
    expect(getByText("City :")).toBeInTheDocument();
    expect(getByText("District :")).toBeInTheDocument();
    expect(getByText("Address :")).toBeInTheDocument();
  });
});
