import React from "react";
import { string } from "zod";

interface Props {
  className: string;
}
/*
          or
export Type Props = {
  classname : string;
}
*/

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
