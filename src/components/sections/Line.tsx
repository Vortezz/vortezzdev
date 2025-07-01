import { JSX, KeyboardEventHandler } from "react";

export function Line({ children, background, id, onMouseOver, onMouseOut, className, onKeyPress }: {
	children: string | JSX.Element | JSX.Element[], background: "white" | "gray", id?: string,
	onMouseOver?: () => void, onMouseOut?: () => void, className?: string, onKeyPress?: KeyboardEventHandler<HTMLDivElement>
}) {
	return <div className={`py-24 w-full ${background === "white" ? "bg-white dark:bg-gray-833" : "bg-gray-100 dark:bg-gray-866"} flex relative`}
		id={id}
		onMouseOver={onMouseOver}
		onMouseOut={onMouseOut}
		onKeyDown={onKeyPress}>
		<div className={"mx-auto w-full max-w-[calc(1536px)] flex flex-wrap " + className}>
			{children}
		</div>
	</div>;
}