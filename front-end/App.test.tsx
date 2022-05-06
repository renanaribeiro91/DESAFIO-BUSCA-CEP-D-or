/* eslint-disable testing-library/prefer-screen-queries */
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Home, Initial } from "./src/routes/list";

describe("Initial Component", () => {
  test("Verify Texts", () => {
    const { getByText } = render(<Initial />);

    expect(getByText("Welcome - Rede D'or challenge")).toBeTruthy();
  });

  //   test("Simulate events", async () => {
  //     const { getByText, getByRole } = render(<Initial />);

  //     const enterButton = getByText("Entrar");
  //     userEvent.click(enterButton);

  //     await waitFor(() => {
  //       expect(getByText("Search zip code")).toBeInTheDocument();
  //     });
  //   });
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
