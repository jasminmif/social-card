import clsx from "clsx";
import { ReactNode } from "react";
import AddIcon from "../icons/AddIcon";
import CancelIcon from "../icons/CancelIcon";
import EditIcon from "../icons/EditIcon";
import SaveIcon from "../icons/SaveIcon";

const btnVariants = {
	edit: {
		classes:
			"border-blue-300 text-blue-500 hover:border-blue-400 active:text-blue-400 active:border-blue-500 bg-blue-50",
			childClasses: '',
		icon: <EditIcon />,
	},
	save: {
		classes:
			"border-green-300 text-green-500 hover:border-green-400 active:text-green-400 active:border-green-500 bg-green-50",
			childClasses: '',
		icon: <SaveIcon />,
	},
	cancel: {
		classes:
			"border-yellow-300 text-yellow-500 hover:border-yellow-400 active:text-yellow-400 active:border-yellow-500 bg-yellow-50",
		childClasses: '',
		icon: <CancelIcon />,
	},
	add: {
		classes: "border-green-300 text-green-500 hover:border-green-400 active:text-green-400 active:border-green-500 bg-green-50 w-32 hover:w-32 h-12 overflow-visible",
		childClasses: 'opacity-100 text-base',
		icon: <AddIcon />
	}
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant: keyof typeof btnVariants;
}

export default function Button({ variant, children, ...props }: ButtonProps) {
	const { classes, childClasses, icon } = btnVariants[variant];
	return (
		<button
			className={clsx(
				`h-8 border-2 px-3 py-1 sm:px-3 sm:py-1 text-xs font-semibold sm:text-sm rounded flex items-center
        group transition-all transition-width w-10 hover:w-20 ease-in-out duration-200 delay-100 hover:delay-75
        overflow-hidden
        `,
				classes
			)}
			{...props}
		>
			{icon && <span>{icon}</span>}
			<span className={clsx("group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-200 delay-100", childClasses)}>
				{children}
			</span>
		</button>
	);
}
