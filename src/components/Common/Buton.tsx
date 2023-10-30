import React from "react";

interface Props extends React.ComponentProps<"button"> {
  children: any;
  size?: "small" | "medium" | "large";
}

const listSize = {
  small: "",
  medium: "",
  large: ""
};

function Buton({ children, className, ...otherProps }: Props) {
  return (
    <button className="" {...otherProps}>
      {children}
    </button>
  );
}

export default Buton;
