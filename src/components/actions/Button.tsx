import { MouseEventHandler } from "react";
import { HashLink as Link } from "react-router-hash-link";

interface ButtonProps {
	/**
	 * The text or element to display in the button
	 */
	body: string | JSX.Element | JSX.Element[];

	/**
	 * The color of the button
	 */
	color: "primary" | "white";

	/**
	 * The type of button
	 */
	type?: "primary" | "secondary" | "tertiary" | "quaternary";

	/**
	 * The size of the button
	 */
	size?: "small" | "medium" | "large";

	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;

	/**
	 * Link to navigate to
	 */
	link?: string;

	/**
	 * On click handler
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>;

	/**
	 * Additional classes to add to the button
	 */
	className?: string;

	/**
	 * Transparent background
	 */
	transparent?: boolean;

	/**
	 * New tab
	 */
	newTab?: boolean;
}

export function Button({ body, size, disabled, type, color, link, onClick, className, transparent, newTab }: ButtonProps) {
	let sizeProperties: { secondary: string; quaternary: string; tertiary: string; primary: string } = {
		"primary": "w-fit text px-10 rounded-lg h-12",
		"secondary": "w-fit text px-[calc(38px)] rounded-lg h-12",
		"tertiary": "w-fit text px-10 rounded-lg h-12",
		"quaternary": "w-fit text",
	};

	switch (size) {
		case "large": {
			sizeProperties = {
				"primary": "w-fit text-xl px-10 rounded-lg h-14",
				"secondary": "w-fit text-xl px-[calc(38px)] rounded-lg h-14",
				"tertiary": "w-fit text-xl px-10 rounded-lg h-14",
				"quaternary": "w-fit text-xl",
			};
			break;
		}
		case "small": {
			sizeProperties = {
				"primary": "w-fit text-sm px-6 rounded-lg h-10",
				"secondary": "w-fit text-sm px-[calc(22px)] rounded-lg h-10",
				"tertiary": "w-fit text-sm px-6 rounded-lg h-10",
				"quaternary": "w-fit text-sm",
			};
		}
	}

	if (disabled) {
		onClick = undefined;
	}

	let colorProperties: { border: string; background: string; text: string } = {
		"background": "bg-primary-500",
		"text": "text-black",
		"border": "border-primary-200",
	};

	switch (color) {
		case "white":
			colorProperties = {
				"background": "bg-white",
				"text": "text-white",
				"border": "border-white",
			};
			break;
	}

	if (disabled) {
		colorProperties = {
			"background": "bg-gray-500",
			"text": "text-gray-500",
			"border": "border-gray-200",
		};
	}

	if (!type || type === "primary") {
		if (link) {
			if (!link.startsWith("http")) {
				return <Link to={link}
					className={`${disabled ? "" : "cursor-pointer"} ${transparent ? "" : colorProperties.background} text-white ${sizeProperties.primary} flex ${className} hover:-translate-y-1 transition-transform`}>
					<div className={"my-auto h-fit"}>{body}</div>
				</Link>;
			}

			return <a className={`${disabled ? "" : "cursor-pointer"} ${transparent ? "" : colorProperties.background} text-white ${sizeProperties.primary} flex ${className} hover:-translate-y-1 transition-transform`}
				href={link}
				target={newTab ? "_blank" : ""}
				rel={"noreferrer"}>
				<div className={"my-auto h-fit"}>{body}</div>
			</a>;
		}

		return <button
			className={`${disabled ? "" : "cursor-pointer"} ${transparent ? "" : colorProperties.background} text-white ${sizeProperties.primary} flex ${className} hover:-translate-y-1 transition-transform`}
			onClick={onClick}>
			<div className={"my-auto h-fit"}>{body}</div>
		</button>;
	} else if (type === "secondary") {
		if (link) {
			if (!link.startsWith("http")) {
				return <Link to={link}
					className={`${disabled ? "border-gray-200" : `${colorProperties.border} cursor-pointer`} ${transparent ? "" : "bg-white"} border ${colorProperties.text} ${sizeProperties.secondary} flex ${className} hover:-translate-y-1 transition-transform`}>
					<div className={"my-auto h-fit"}>{body}</div>
				</Link>;
			}

			return <a className={`${disabled ? "border-gray-200" : `${colorProperties.border} cursor-pointer`} ${transparent ? "" : "bg-white"} border ${colorProperties.text} ${sizeProperties.secondary} flex ${className} hover:-translate-y-1 transition-transform`}
				href={link}
				target={newTab ? "_blank" : ""}
				rel={"noreferrer"}>
				<div className={"my-auto h-fit"}>{body}</div>
			</a>;
		}

		return <button className={`${disabled ? "border-gray-200" : `${colorProperties.border} cursor-pointer`} ${transparent ? "" : "bg-white"} border ${colorProperties.text} ${sizeProperties.secondary} flex ${className} hover:-translate-y-1 transition-transform`}
			onClick={onClick}>
			<div className={"my-auto h-fit"}>{body}</div>
		</button>;
	} else if (type === "tertiary") {
		if (link) {
			if (!link.startsWith("http")) {
				return <Link to={link}
					className={`${disabled ? "text-gray-200" : `${colorProperties.text} cursor-pointer`} ${sizeProperties.tertiary} underline flex ${className} hover:-translate-y-1 transition-transform`}>
					<div className={"my-auto h-fit"}>{body}</div>
				</Link>;
			}

			return <a className={`${disabled ? "text-gray-200" : `${colorProperties.text} cursor-pointer`} ${sizeProperties.tertiary} underline flex ${className} hover:-translate-y-1 transition-transform`}
				href={link}
				target={newTab ? "_blank" : ""}
				rel={"noreferrer"}>
				<div className={"my-auto h-fit"}>{body}</div>
			</a>;
		}

		return <button className={`${!disabled && `cursor-pointer`} ${colorProperties.text} ${sizeProperties.tertiary} underline flex ${className}`}
			onClick={onClick}>
			<div className={"my-auto h-fit"}>{body}</div>
		</button>;
	}

	if (link) {
		if (!link.startsWith("http")) {
			return <Link to={link}
				className={`${disabled ? "text-gray-200" : `${colorProperties.text} cursor-pointer`} px-2 ${sizeProperties.quaternary} ${className} hover:-translate-y-1 transition-transform`}>
				{body}
			</Link>;
		}

		return <a className={`${disabled ? "text-gray-200" : `${colorProperties.text} cursor-pointer`} px-2 ${sizeProperties.quaternary} ${className} hover:-translate-y-1 transition-transform`}
			href={link}
			target={newTab ? "_blank" : ""}
			rel={"noreferrer"}>
			{body}
		</a>;
	}

	return <button className={`${!disabled && `cursor-pointer`} px-2 ${colorProperties.text} ${sizeProperties.quaternary} ${className} hover:-translate-y-1 transition-transform`}
		onClick={onClick}>
		{body}
	</button>;
}