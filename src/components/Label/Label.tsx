import React, { useState } from "react";
import styled from "styled-components";

export interface LabelProps {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledLabel = styled.span<Pick<LabelProps, "primary" | "disabled">>`
  color: ${(props) => (props.primary ? "blue" : "gray")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: ${(props) => (props.disabled ? "gray" : "green")};
  }
`;

const Label: React.FC<LabelProps> = ({
  label,
  primary = false,
  disabled,
  onClick,
}) => {
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
    <StyledLabel primary={isPrimary} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledLabel>
  );
};

export default Label;
