import React from "react";
import styled from "styled-components";
import { Typography } from "@rtab/components/atoms";

const GITHUB_URL =
  "https://github.com/tachibanayu24/react-ts-atomicdesign-boilerplate";

export const ForkMe = () => (
  <StyledWrapper>
    <StyledLink href={GITHUB_URL}>
      <Typography variant="body2">Fork me on GitHub</Typography>
    </StyledLink>
  </StyledWrapper>
);

const StyledWrapper = styled.span`
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  z-index: 9999;
`;

const StyledLink = styled.a`
  background: ${(props) => props.theme.palette.gray.light};
  white-space: nowrap;
  color: ${(props) => props.theme.palette.secondary[100]};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  padding: 4px 80px;
  font-size: 1rem;
  line-height: 2rem;
  position: relative;
  width: 400px;
  position: absolute;
  top: 50px;
  right: -140px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8);
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.palette.secondary.light};
    color: ${(props) => props.theme.palette.gray.main};
  }

  &::before,
  &::after {
    content: "";
    width: 100%;
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    height: 1px;
    background: white;
  }

  &::after {
    bottom: 1px;
    top: auto;
  }
`;
