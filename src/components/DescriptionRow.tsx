import { ReactNode } from "react";

interface DescriptionRowProps {
	icon: ReactNode;
	children: string | ReactNode;
	isEditing?: boolean;
}

export default function DescriptionRow({
	icon,
	children,
}: DescriptionRowProps) {
	return (
		<div className="flex items-center">
			<div className="mr-2 w-5">{icon}</div>
			<div className="text-gray-600">{children}</div>
		</div>
	);
}
