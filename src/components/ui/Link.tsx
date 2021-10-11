import clsx from "clsx";

const linkTypes = {
	email: (val: string) => `mailto:${val}`,
	phone: (val: string) => `tel:${val}`,
	link: (val: string) => `https://${val}`,
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
	type: keyof typeof linkTypes;
	className?: string;
}

export default function Link({ text, className, type = "link" }: LinkProps) {
	return (
		<a className={clsx(className)} href={linkTypes[type](text)}>
			{text}
		</a>
	);
}
