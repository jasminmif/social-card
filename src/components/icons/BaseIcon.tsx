import { ReactNode } from "react";

interface BaseIconProps {
	children: ReactNode;
}

export default function BaseIcon({ children }: BaseIconProps) {
	return <span className="flex items-center h-full">{children}</span>;
}
