import { twMerge } from "tailwind-merge";

import { CardProps } from "./types";

export const Card = ({ ...restProps }: CardProps) => (
  <div
    className={twMerge(
      "flex flex-col w-fit bg-white rounded-md shadow-md p-4",
      restProps.className
    )}
  >
    {restProps.children}
  </div>
);
