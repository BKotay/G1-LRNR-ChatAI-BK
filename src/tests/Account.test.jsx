import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Account from "../pages/Account.jsx"; // Adjust the import path as needed

describe("Account Component", () => {
  it("1. Renders the Account Page Correctly", () => {
    render(<Account />);

    // Check if the account title is rendered
    const accountTitle = screen.getByText("Account");
    expect(accountTitle).toBeInTheDocument();
    expect(accountTitle).toHaveClass("text-7xl"); // Check for the correct class

    // Check if the Streak section is rendered
    const streakIcon = screen.getByText("🔥");
    const streakText = screen.getByText("You have a streak of 5 days!");
    expect(streakIcon).toBeInTheDocument();
    expect(streakText).toBeInTheDocument();

    // Check if the Platinum Quizzes section is rendered
    const quizzesIcon = screen.getByText("📋");
    const quiz1 = screen.getByText("golang - intermediate");
    const quiz2 = screen.getByText("Javascript - beginner");
    const quiz3 = screen.getByText("AWS - beginner");
    expect(quizzesIcon).toBeInTheDocument();
    expect(quiz1).toBeInTheDocument();
    expect(quiz2).toBeInTheDocument();
    expect(quiz3).toBeInTheDocument();

    // Check if the Irnr Level section is rendered
    const levelIcon = screen.getByText("👤");
    const levelText = screen.getByText("Irnr Level: 2");
    const xpText = screen.getByText("151/200 xp");
    expect(levelIcon).toBeInTheDocument();
    expect(levelText).toBeInTheDocument();
    expect(xpText).toBeInTheDocument();
  });
});
