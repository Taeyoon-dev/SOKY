import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => <StyledInput {...props} />;

const StyledInput = styled.input`
  width: 562px;
  max-width: 100%;
  height: 50px;
  padding: 0 16px;
  font-size: 20px;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 12px;
  outline: none;

  ::placeholder {
    color: #8a898f;
  }

  &:focus {
    border-color: #18171D;
  }
`;

export default Input;