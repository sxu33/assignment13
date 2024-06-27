import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

describe('Label', () => {
  test('renders the Label component', () => {
    render(<Label label="Label" />);
    const labelElement = screen.getByText(/Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('label changes color when disabled', () => {
    render(<Label label="Label" disabled={true} />);
    const labelElement = screen.getByText(/Label/i);
    expect(labelElement).toHaveStyle('color: gray');
    expect(labelElement).toHaveStyle('opacity: 0.5');
  });
});
