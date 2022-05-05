/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Home } from "./routes/list";

describe("Home Component", () => {
  test("Verify Texts", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Welcome - Rede D'or challenge")).toBeInTheDocument();
    expect(getByText("CEP :")).toBeInTheDocument();
    expect(getByText("State :")).toBeInTheDocument();
    expect(getByText("City :")).toBeInTheDocument();
    expect(getByText("District :")).toBeInTheDocument();
    expect(getByText("Address :")).toBeInTheDocument();
  });

  //   test("should be looking for zip", () => {
  //     const { getByText, getByRole } = render(<Home />);

  //     const searchButton = getByText("search");
  //     userEvent.click(searchButton);

  //     expect(getByText("21920430")).toBeInTheDocument();
  //   });
});
