import clsx from "clsx";
import { forwardRef } from "react";

const inputVariants = {
  sm: "text-sm px-2",
  md: "py-1 px-3 text-base",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: keyof typeof inputVariants;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ variant = "sm", className, ...props }, ref) => {
  const classes = inputVariants[variant];

  return (
    <input
      ref={ref}
      type="text"
      {...props}
      className={clsx(`border-2  border-gray-300 hover:border-gray-200 rounded text-gray-800 outline-none transition-color ease-in-out delay-100`, classes)}
    />
  );
});

export default Input;
