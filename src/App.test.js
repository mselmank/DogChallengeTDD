import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Given App component", () => {
  it("should render component", () => {
    const id = "App";

    render(<App />);

    const linkElement = screen.getByTestId(id);
    expect(linkElement).toBeTruthy();
  });
});
