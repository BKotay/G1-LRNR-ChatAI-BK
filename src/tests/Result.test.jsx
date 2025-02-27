import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Result from '../pages/Result.jsx'; // Adjust the import path as needed

describe('Result Component', () => {
  it('1. Renders the Result Page Correctly', () => {
    render(<Result />);

    // Check if the title is rendered
    expect(screen.getByText('Irnr')).toBeInTheDocument();
    expect(screen.getByText('Irnr')).toHaveClass('text-7xl'); // Check for the correct class

    // Check if the "Questions Right" text is rendered
    const questionsRight = screen.getByText('Questions Right: 0111');
    expect(questionsRight).toBeInTheDocument();
    expect(questionsRight).toHaveClass('text-2xl'); // Check for the correct class

    // Check if the "TRY ANOTHER QUIZ" button is rendered
    const button = screen.getByRole('button', { name: /TRY ANOTHER QUIZ/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-emerald-500'); // Check for the correct class
  });
});