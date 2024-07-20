import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("Card", () => {
  test("renders the Card component", () => {
    render(<Card title="Card Title" content="Card Content" />);
    const cardTitleElement = screen.getByText(/Card Title/i);
    const cardContentElement = screen.getByText(/Card Content/i);
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardContentElement).toBeInTheDocument();
  });

  test("card changes background color when disabled", () => {
    render(<Card title="Card Title" content="Card Content" disabled={true} />);
    const cardElement = screen.getByText(/Card Title/i).closest("div");
    expect(cardElement).toHaveStyle("background-color: gray");
    expect(cardElement).toHaveStyle("opacity: 0.5");
  });
});
