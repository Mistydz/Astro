import React from "react";

interface ErrorProps {
  error: { message: string } | null;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  return <h1>{error.message}</h1>;
};

export default Error;