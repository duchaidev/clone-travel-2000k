import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div
      className={`max-w-screen-2xl
      mx-auto
      xl:px-40 
      md:px-10
      sm:px-4
      px-8
      ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
