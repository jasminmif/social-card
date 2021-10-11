import clsx from "clsx";
import { ReactNode } from "react";

interface ProfileContainerProps {
	profilePictureComponent: ReactNode;
	children: ReactNode;
}

export default function UserProfileContainer({
	profilePictureComponent,
	children,
}: ProfileContainerProps) {
	return (
		<div
			className={clsx(
				"flex flex-col sm:flex-row shadow-md rounded-2xl sm:max-w-2x side"
			)}
		>
			<div className="sm:w-64 sm:h-64 flex items-center justify-center bg-gradient-to-br from-red-300 to-orange-200 text-6xl rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-tl-2xl sm:rounded-bl-2xl">
				{profilePictureComponent}
			</div>
			<div className="bg-white flex-1 flex flex-col justify-between rounded-bl-2xl rounded-br-2xl sm:rounded-tr-2xl sm:rounded-br-2xl sm:rounded-bl-none p-6">
				{children}
			</div>
		</div>
	);
}
