import React, { useState } from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  primary?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const StyledSelect = styled.select<Pick<DropdownProps, 'primary' | 'disabled'>>`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  width: 100%;
  max-width: 200px;
  @media (max-width: 600px) {
    max-width: 100px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, primary = false, disabled, onChange }) => {
  const [isPrimary, setIsPrimary] = useState(primary);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      setIsPrimary(!isPrimary);
      if (onChange) {
        onChange(event.target.value);
      }
    }
  };

  return (
    <StyledSelect primary={isPrimary} disabled={disabled} onChange={handleChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
