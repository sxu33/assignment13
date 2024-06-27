import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  content: string;
  primary?: boolean;
  disabled?: boolean;
}

const StyledCard = styled.div<Pick<CardProps, 'primary' | 'disabled'>>`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 20px;
  border-radius: 10px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  max-width: 300px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Card: React.FC<CardProps> = ({ title, content, primary = false, disabled = false }) => {
  return (
    <StyledCard primary={primary} disabled={disabled}>
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
