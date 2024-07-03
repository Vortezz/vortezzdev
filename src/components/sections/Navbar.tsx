import { Button } from "../actions/Button";

import logo from "../../resources/pictures/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar({ withoutSpace }: { withoutSpace?: boolean }) {
	const navigate = useNavigate();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return <>
		<div className={`w-full h-24 bg-primary-800 dark:bg-gray-900 flex fixed z-[40]`}>
			<div className={"w-full h-16 m-auto max-w-[calc(1536px)] flex flex-row justify-between"}>
				<div className={"pr-8 my-auto"}>
					<img className={"h-12 my-auto ml-[min(100%,2rem)] hover:rotate-[360deg] transition-transform"}
						src={logo}
						alt={"logo"}></img>
				</div>
				<div className={"hidden sm:flex"}>
					<Button body={"Home"}
						color={"white"}
						type={"quaternary"}
						link={"/"}
						className={"my-auto mr-8"} />
					<Button body={"Contact"}
						color={"white"}
						type={"quaternary"}
						link={"mailto:contact@vortezz.dev"}
						className={"my-auto mr-8"} />
					<div className={`my-auto mr-8 text-md text-white cursor-pointer hover:rotate-45 transition-transform vr ${document.documentElement.classList.contains("dark") ? "sun" : "moon"}`}
						onClick={(elem) => {
							document.documentElement.classList.toggle("dark");

							if (document.documentElement.classList.contains("dark")) {
								localStorage.setItem("theme", "dark");
							} else {
								localStorage.setItem("theme", "light");
							}

							elem.currentTarget.classList.toggle("moon");
							elem.currentTarget.classList.toggle("sun");
						}}></div>
					{/*<Button body={"Blog"}
						color={"white"}
						type={"quaternary"}
						link={"/blog"}
						className={"my-auto mr-8"} />
					<Button body={"Tools"}
						color={"white"}
						type={"quaternary"}
						link={"/tools"}
						className={"my-auto"} />*/}
				</div>
				{/*{!appContext.account ?
					<Button body={"Sign In"}
						link={"/auth/signin"}
						color={"primary"}
						className={"my-auto hidden sm:flex mr-[min(100%,2rem)]"} /> :
					<Button body={"Profile"}
						link={"/dashboard"}
						color={"primary"}
						className={"my-auto hidden sm:flex mr-[min(100%,2rem)]"} />
				}
				REMOVE THE DIV BELOW WHEN YOU ADD THE SIGN IN BUTTON BACK IN
				*/}
				<div className={"sm:hidden mr-[min(100%,2rem)] flex flex-col h-11 justify-between p-2 cursor-pointer my-auto"}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={`w-8 h-1 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-3" : ""}`}></div>
					<div className={`w-8 h-1 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
					<div className={`w-8 h-1 rounded-full bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-3" : ""}`}></div>
				</div>
			</div>
		</div>
		<div className={`fixed z-[8] -top-8 transition-all duration-300 ${isMenuOpen ? "translate-y-8" : "special-hide"} flex flex-col sm:hidden h-screen w-full bg-primary-800 dark:bg-gray-900`}>
			<div className={"flex flex-col mt-[min(100%,8rem)]"}>
				<Button body={"Home"}
					color={"white"}
					type={"quaternary"}
					size={"large"}
					onClick={() => {
						setIsMenuOpen(false);
						navigate("/");
					}}
					className={"my-2 mx-auto"} />
				<Button body={"Contact"}
					color={"white"}
					type={"quaternary"}
					size={"large"}
					link={"mailto:contact@vortezz.dev"}
					className={"my-2 mx-auto"} />
				<div className={`my-2 mx-auto text-2xl text-white cursor-pointer hover:rotate-45 transition-transform vr ${document.documentElement.classList.contains("dark") ? "sun" : "moon"}`}
					onClick={(elem) => {
						document.documentElement.classList.toggle("dark");

						if (document.documentElement.classList.contains("dark")) {
							localStorage.setItem("theme", "dark");
						} else {
							localStorage.setItem("theme", "light");
						}

						elem.currentTarget.classList.toggle("moon");
						elem.currentTarget.classList.toggle("sun");
					}}></div>
				{/*<Button body={"Blog"}
					color={"white"}
					type={"quaternary"}
					size={"large"}
					link={"/blog"}
					className={"my-2 mx-auto"} />
				<Button body={"Tools"}
					color={"white"}
					type={"quaternary"}
					size={"large"}
					link={"/tools"}
					className={"my-2 mx-auto"} />*/}
			</div>
			{/*{!appContext.account ?
				<Button body={"Sign In"}
					link={"/auth/signin"}
					color={"primary"}
					size={"large"}
					className={"mt-2 mb-[min(100%,8rem)] mx-auto"} /> :
				<Button body={"Profile"}
					link={"/dashboard"}
					color={"primary"}
					size={"large"}
					className={"mt-2 mb-[min(100%,8rem)] mx-auto"} />
			}*/}
		</div>
		{!withoutSpace ? <div className={"h-24 w-2"}></div> : undefined}
	</>;
}