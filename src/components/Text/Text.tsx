import React, { useState } from "react";
import styled from "styled-components";

export interface TextProps {
  content: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const StyledText = styled.span<Pick<TextProps, "primary" | "disabled">>`
  color: ${(props) => (props.primary ? "blue" : "gray")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: ${(props) => (props.disabled ? "gray" : "green")};
  }
`;

const Text: React.FC<TextProps> = ({
  content,
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
    <StyledText primary={isPrimary} disabled={disabled} onClick={handleClick}>
      {content}
    </StyledText>
  );
};

export default Text;
