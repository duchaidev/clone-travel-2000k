import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
}

function FlexMiddle(props: Props) {
  const { children, className, ...otherProps } = props;
  return (
    <div className={`flex items-center ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

export default FlexMiddle;
