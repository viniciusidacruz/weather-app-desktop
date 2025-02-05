import { ComponentProps, ElementType, ReactNode } from "react";

export interface FieldRootProps {
  className?: string;
  children: ReactNode;
}

export type FieldProps = ComponentProps<"input">;

export interface FieldIconProps {
  icon: ElementType;
  className?: string;
}
