import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './Text';

describe('Text', () => {
  test('renders the Text component', () => {
    render(<Text content="Text" />);
    const textElement = screen.getByText(/Text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('text changes color when disabled', () => {
    render(<Text content="Text" disabled={true} />);
    const textElement = screen.getByText(/Text/i);
    expect(textElement).toHaveStyle('color: gray');
    expect(textElement).toHaveStyle('opacity: 0.5');
  });
});
