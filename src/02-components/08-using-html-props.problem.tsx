import React, { ComponentProps, PropsWithChildren } from "react";
import { Props } from "react-select/dist/declarations/src/Select";

export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
