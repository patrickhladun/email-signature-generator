import React, { useState } from "react";
import { render } from "@testing-library/react";
import Disclaimer from "../src/components/addons/disclaimer/disclaimer";

const disclaimer = {
  disclaimerType: "custom",
  disclaimer: "",
  disclaimerActive: true,
  disclaimerFontSize: 12,
};

describe("Disclaimer Component", () => {
  it("should render Container", () => {
    const { getByTestId } = render(<Disclaimer disclaimer={disclaimer} />);
    const headerEl = getByTestId("disclaimer-select");
    expect(headerEl).toBeTruthy;
  });
});
