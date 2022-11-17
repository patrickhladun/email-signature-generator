import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  it("should render Container", () => {
    const { getByTestId } = render(<App />);
    const headerEl = getByTestId("container");
    expect(headerEl).toBeTruthy;
  });
});
