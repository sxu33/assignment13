import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("renders the Dropdown component", () => {
    render(<Dropdown options={["Option 1", "Option 2", "Option 3"]} />);
    const dropdownElement = screen.getByRole("combobox");
    expect(dropdownElement).toBeInTheDocument();
  });

  test("dropdown changes background color when disabled", () => {
    render(
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        disabled={true}
      />,
    );
    const dropdownElement = screen.getByRole("combobox");
    expect(dropdownElement).toHaveStyle("background-color: gray");
    expect(dropdownElement).toHaveStyle("opacity: 0.5");
  });
});
