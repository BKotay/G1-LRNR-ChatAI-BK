import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Quiz from "../pages/Quiz.jsx"; // Adjust the import path as needed

describe("Quiz Component", () => {
  it("1. Renders the Quiz Form with Default Values", () => {
    render(<Quiz />);

    // Check if the form title is rendered
    expect(screen.getByText("Quiz Generation Options")).toBeInTheDocument();

    // Check if the default values are set correctly
    expect(screen.getByDisplayValue("golang")).toBeInTheDocument(); // Topic
    expect(screen.getByDisplayValue("Beginner")).toBeInTheDocument(); // Expertise
    expect(screen.getByDisplayValue("5")).toBeInTheDocument(); 
    expect(screen.getByDisplayValue("Master Oogway")).toBeInTheDocument(); // Style
  });

  it("2. Updates State When User Changes Form Inputs", () => {
    render(<Quiz />);

    // Change the topic
    const topicSelect = screen.getByLabelText("Topic"); 
    fireEvent.change(topicSelect, { target: { value: "aws" } });
    expect(topicSelect.value).toBe("aws");

    // Change the expertise
    const expertiseSelect = screen.getByLabelText("Expertise"); 
    fireEvent.change(expertiseSelect, { target: { value: "Intermediate" } });
    expect(expertiseSelect.value).toBe("Intermediate");

    // Change the number of questions
    const numQuestionsSelect = screen.getByLabelText("Number of Questions"); 
    fireEvent.change(numQuestionsSelect, { target: { value: "10" } });
    expect(numQuestionsSelect.value).toBe("10");

    // Change the style
    const styleSelect = screen.getByLabelText("Style of Questions"); 
    fireEvent.change(styleSelect, { target: { value: "Jedi" } });
    expect(styleSelect.value).toBe("Jedi");
  });
});
