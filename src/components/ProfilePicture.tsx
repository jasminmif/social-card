import clsx from "clsx";

interface ProfilePictureProps {
	text?: string;
	url?: string;
	editMode: boolean;
}

export default function ProfilePicture({
	text,
	url,
	editMode,
}: ProfilePictureProps) {
	return (
		<div className="rounded-full h-20 w-20 my-6 sm:my-0 sm:h-36 sm:w-36 overflow-hidden relative flex items-center justify-center">
			{url ? (
				<div
					className="h-full w-full block bg-center bg-cover bg-no-repeat rounded-full"
					style={{
						backgroundImage: `url(${url})`,
					}}
				></div>
			) : (
				<div className="font-dm-serif text-5xl sm:text-7xl text-gray-900">
					{text}
				</div>
			)}
			<div
				className={clsx(
					"absolute top-0 bottom-0 left-0 right-0 text-sm sm:text-base flex items-center justify-center text-center opacity-0 bg-gray-900 bg-opacity-75 rounded-full text-white text-opacity-80 transition-opacity ease-in-out duration-300 cursor-pointer hover:opacity-100",
					editMode && "opacity-100"
				)}
			>
				Change picture
			</div>
		</div>
	);
}
