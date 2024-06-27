import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("button is disabled", () => {
    render(<Button label="Button" disabled={true} />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).toBeDisabled();
  });
});
