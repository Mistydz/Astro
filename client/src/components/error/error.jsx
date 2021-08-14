import React from "react";
import styled from "styled-components";

const Error = ({ error }) => {
  if (!error) {
    return null;
  }

  return <ErrorText>{error.message}</ErrorText>;
};

const ErrorText = styled.h3`
  color: darkred;
  text-align: center;
`;

export default Error;
