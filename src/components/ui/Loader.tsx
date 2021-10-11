import { ReactNode } from "react";
import SpinnerIcon from "../icons/SpinnerIcon";

interface LoaderProps {
	children?: ReactNode
}

export default function Loader({ children }: LoaderProps) {
	return (
		<div className="flex items-center bg-rose-100 p-8 rounded">
			<div className="text-red-600">
				<SpinnerIcon />
			</div>
			<div className="text-red-400">{children}</div>
		</div>
	);
}
