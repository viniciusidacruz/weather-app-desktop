import { twMerge } from "tailwind-merge";

import { FieldRootProps, FieldProps, FieldIconProps } from "./types";

const Root = ({ children, className = "" }: FieldRootProps) => (
  <div
    className={twMerge(
      className,
      "w-full flex gap-2 p-2 items-center bg-white"
    )}
  >
    {children}
  </div>
);

const Field = ({ className = "", ...restProps }: FieldProps) => (
  <input
    className={twMerge(
      className,
      "flex-1 text-slate-950 focus:outline-none placeholder:text-slate-600"
    )}
    {...restProps}
  />
);

export const Icon = ({ icon: Element, className = "" }: FieldIconProps) => (
  <Element className={twMerge(className, "text-blue-700")} />
);

export const Input = {
  Root,
  Field,
  Icon,
};
