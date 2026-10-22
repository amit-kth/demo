import type { ReactNode } from "react";

const containerClasses =
  "mx-auto w-full max-w-[1448px] px-11 max-[1100px]:px-7 max-[680px]:px-[18px] max-[380px]:px-[15px]";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${containerClasses} ${className}`}>{children}</div>;
}
