import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../pages/Home"; 

describe("Home Component", () => {
  it('redirects to /quiz when "BEGIN JOURNEY" button is clicked', () => {
    render(<Home />);

    // Get the button by its text content
    const button = screen.getByText("BEGIN JOURNEY");

    // Simulate a click on the button
    fireEvent.click(button);

    // Check if the URL changes to '/quiz'
    expect(window.location.href + "quiz").toBe("http://localhost:3000/quiz");
  });
});
