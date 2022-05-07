/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import renderer from "react-test-renderer";

import { Home, Initial } from "../routes/list";

describe("Initial Component", () => {
  test("Verify Texts", () => {
    const { getByText } = render(<Initial />);

    expect(getByText("Welcome - Rede D'or challenge")).toBeTruthy();
  });

  // test("renders correctly", () => {
  //   const tree = renderer.create(<Initial />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
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
