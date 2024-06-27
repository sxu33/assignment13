import React, { useState } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<Pick<ButtonProps, 'primary' | 'disabled'>>`
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

const Button: React.FC<ButtonProps> = ({ label, primary = false, disabled, onClick }) => {
  const [isPrimary, setIsPrimary] = useState(primary);

  const handleClick = () => {
    if (!disabled) {
      setIsPrimary(!isPrimary);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledButton primary={isPrimary} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
