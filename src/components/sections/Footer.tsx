import { Button } from "../actions/Button";

import logo from "../../resources/pictures/logo.svg";

function Column({ title, links }: { title: string; links: { link: string, name: string }[] }) {
	return <div className={"flex flex-col mx-auto xs:mx-0 xs:min-w-[calc(150px)] text-center xs:text-left"}>
		<div className={"text-white font-bold px-2 mb-4"}>{title}</div>
		{links.map((link, key) => {
			return <Button body={link.name}
				color={"white"}
				type={"quaternary"}
				link={link.link}
				className={"my-1 mx-auto xs:mx-0 px-0"}
				key={key} />;
		})}
	</div>;
}

function SocialButton({ icon, link }: { icon: string, link: string }) {
	return <Button
		color={"white"}
		type={"quaternary"}
		link={link}
		newTab={true}
		className={""}
		body={
			<i className={`vr ${icon}`}></i>
		} />;
}

export function Footer() {
	return <div className={"w-full min-h-[calc(16rem)] bg-primary-800 dark:bg-gray-900 flex mt-auto"}>
		<div className={"w-full h-fit m-auto max-w-[calc(1536px)] flex flex-col justify-between"}>
			<div className={"flex flex-col md:mx-[min(100%,2rem)] lg:flex-row justify-between flex-wrap"}>
				<div className={"mb-auto flex text-3xl font-bold text-white align-baseline mt-8 mx-auto lg:ml-0"}>
					<img className={"h-12 mr-4"}
						src={logo}
						alt={"logo"}></img>
					<div className={"my-auto"}>Vortezz</div>
				</div>
				<div className={"flex flex-wrap flex-col justify-center xs:flex-row mx-[min(100%,1rem)] mt-0 lg:mt-8 mr-[min(100%,2rem)] lg:mr-0"}>
					<div className={"flex flex-wrap flex-col sm:flex-row mx-auto mt-8 md:mx-0 lg:m-0 gap-y-8"}>
						<Column title={"Home"}
							links={
								[
									{
										link: "/",
										name: "Home",
									},
									{
										link: "/#about",
										name: "About",
									},
									{
										link: "/#skills",
										name: "Skills",
									},
									{
										link: "/#projects",
										name: "Projects",
									},
								]
							} />
						{/*<Column title={"Useful Pages"}
							links={
								[
									{
										link: "/blog",
										name: "Blog",
									},
									{
										link: "/tools",
										name: "Tools",
									},
									{
										link: "/contact",
										name: "Contact",
									},
									{
										link: "/status",
										name: "Status",
									},
								]
							} />*/}
					</div>
					<div className={"flex flex-wrap flex-col sm:flex-row mx-auto mt-8 md:mx-0 lg:m-0 gap-y-8"}>
						<Column title={"Legal"}
							links={[
								{
									link: "/privacy",
									name: "Privacy Policy",
								},
								{
									link: "/attributions",
									name: "Attributions",
								},
								// {
								// 	link: "/data-processing",
								// 	name: "Data Processing",
								// },
							]
							} />
						{/*<div className={"flex flex-col sm:ml-8"}>
							<div className={"text-white font-bold mb-4 mx-auto xs:mx-0"}>Join Us!</div>
							<Button body={"Sign In"}
								color={"white"}
								type={"secondary"}
								link={"/auth/signin"}
								transparent={true}
								className={"my-0.5 mx-auto xs:mx-0"} />
							<Button body={"Sign Up"}
								color={"primary"}
								type={"primary"}
								link={"/auth/signup"}
								className={"my-0.5 mx-auto xs:mx-0"} />
						</div>*/}
					</div>
				</div>
			</div>
			<div className={"flex flex-col md:flex-row justify-between mt-8 mb-4"}>
				<div className={"flex mx-auto h-fit px-4 my-auto md:px-0 text-center md:ml-[min(100%,2rem)] text-sm text-white align-baseline"}>
					Vortezz © | Fully open source and made with ❤️
				</div>
				<div className={"flex flex-wrap xs:flex-nowrap max-w-[calc(272px)] justify-around mx-auto px-4 md:px-0 md:mr-[min(100%,2rem)] mt-4 md:my-auto gap-x-8 gap-y-4 xs:gap-y-0"}>
					<SocialButton link={"https://github.com/Vortezz"}
						icon={"github"} />
					<SocialButton link={"https://ko-fi.com/vortezz"}
						icon={"kofi"} />
					<SocialButton link={"https://www.linkedin.com/in/vsarrazin/"}
						icon={"linkedin"} />
					<SocialButton link={"https://twitter.com/vortezzdev"}
						icon={"twitter"} />
				</div>
			</div>
		</div>
	</div>;
}