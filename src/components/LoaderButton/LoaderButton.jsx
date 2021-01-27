import React from "react";
import { Spinner } from "./styles";
import Button from "@material-ui/core/Button";
import { BsArrowRepeat } from "react-icons/bs";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled || isLoading}
      className={`LoaderButton ${className}`}
      fullWidth
      variant="contained"
      color="primary"
      {...props}
    >
      {isLoading && (
        <Spinner>
          <BsArrowRepeat />
        </Spinner>
      )}
      {props.children}
    </Button>
  );
}
