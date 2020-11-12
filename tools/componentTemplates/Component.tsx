import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const Component = (props: Props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px;
`;
