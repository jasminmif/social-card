import clsx from "clsx";

const inputVariants = {
  sm: "text-sm",
  md: "py-1 text-base",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: keyof typeof inputVariants;
}

export default function Input({ variant = "sm", className, ...props }: InputProps) {
  const classes = inputVariants[variant];

  return (
    <input
      type="text"
      {...props}
      className={clsx(`border-2  border-gray-300 hover:border-gray-200 rounded text-gray-800 outline-none px-3 transition-color ease-in-out delay-100`, classes)}
    />
  );
}
