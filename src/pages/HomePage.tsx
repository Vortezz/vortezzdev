import { Page } from "../components/pages/Page";
import { Button } from "../components/actions/Button";

import { KeyboardEventHandler, useEffect, useState } from "react";
import { useInterval } from "../utils/Interval";

import topPicture from "../resources/pictures/top_picture.webp";
import aboutPicture from "../resources/pictures/about_picture.webp";
import vortezzDevPicture from "../resources/pictures/vortezzdev.webp";
import molkkyCountPicture from "../resources/pictures/molkkycount.webp";
import cityOfNationsPicture from "../resources/pictures/cityofnations.webp";
import contactPicture from "../resources/pictures/contact.webp";

const skills: { id: string, name: string, text: string, links: { icon: string, url: string }[] }[] = [
	{
		id: "typescript",
		name: "TypeScript",
		text: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
		links: [
			{ icon: "github", url: "https://github.com/microsoft/TypeScript" },
			{ icon: "link", url: "https://www.typescriptlang.org/" },
		],
	},
	{
		id: "javascript",
		name: "JavaScript",
		text: "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It is used in web development and beyond.",
		links: [
			{ icon: "link", url: "https://developer.mozilla.org/en/docs/Web/JavaScript" },
		],
	},
	{
		id: "java",
		name: "Java",
		text: "Java is a class-based, object-oriented programming language. It can be used everywhere because 3 billion devices run Java. It is used in web development, mobile development, desktop development, and more. I mainly use Java for my Minecraft plugins.",
		links: [
			{ icon: "link", url: "https://www.java.com/" },
		],
	},
	{
		id: "html",
		name: "HTML",
		text: "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and scripting languages such as JavaScript.",
		links: [
			{ icon: "link", url: "https://developer.mozilla.org/en/docs/Web/HTML" },
		],
	},
	{
		id: "css",
		name: "CSS",
		text: "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
		links: [
			{ icon: "link", url: "https://developer.mozilla.org/en/docs/Web/CSS" },
		],
	},
	{
		id: "python",
		name: "Python",
		text: "Python is a programming language used a lot by data scientists. It is a high-level, general-purpose, interpreted and dynamic programming language.",
		links: [
			{ icon: "github", url: "https://github.com/python/cpython" },
			{ icon: "link", url: "https://www.python.org/" },
		],
	},
	{
		id: "rust",
		name: "Rust",
		text: "Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references.",
		links: [
			{ icon: "github", url: "https://github.com/rust-lang/rust" },
			{ icon: "link", url: "https://www.rust-lang.org/" },
		],
	},
	{
		id: "flutter",
		name: "Flutter",
		text: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, and the web from a single codebase.",
		links: [
			{ icon: "github", url: "https://github.com/flutter/flutter" },
			{ icon: "link", url: "https://flutter.dev/" },
		],
	},
	{
		id: "tailwind",
		name: "TailwindCSS",
		text: "TailwindCSS is a utility-first CSS framework. It is used to build custom designs quickly and without writing any CSS. It is used in this website to have a nice design and a better maintainability.",
		links: [
			{ icon: "github", url: "https://github.com/tailwindlabs/tailwindcss" },
			{ icon: "link", url: "https://tailwindcss.com/" },
		],
	},
	{
		id: "react",
		name: "React",
		text: "React is an open-source front-end JavaScript framework for building dynamic user interfaces or UI components. It is maintained by Facebook since 2013, and it is also used in this website.",
		links: [
			{ icon: "github", url: "https://github.com/facebook/react" },
			{ icon: "link", url: "https://reactjs.org/" },
		],
	},
	{
		id: "bash",
		name: "Bash & Shell",
		text: "Bash is a Unix shell and command language. It has been distributed widely as the shell for the GNU operating system and as a default shell on Linux and OS X.",
		links: [
			{ icon: "link", url: "https://www.gnu.org/software/bash/" },
		],
	},
	{
		id: "docker",
		name: "Docker",
		text: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files.",
		links: [
			{ icon: "github", url: "https://github.com/docker/compose" },
			{ icon: "link", url: "https://www.docker.com/" },
		],
	},
	{
		id: "git",
		name: "Git",
		text: "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
		links: [
			{ icon: "link", url: "https://git-scm.com/" },
		],
	},
	{
		id: "english",
		name: "English",
		text: "Does I really need to explain what English is? All you have to know is that English is a very important skill to have in the world of programming, and in the world in general.",
		links: [
			{ icon: "link", url: "https://en.wikipedia.org/wiki/English_language" },
		],
	},
];

const projects: { id: string, name: string, picture: string, text: string, created: { icon: string, link: string }[], used: string[], link?: string }[] = [
	{
		id: "vortezz",
		name: "vortezz.dev",
		picture: vortezzDevPicture,
		text: "The website you are currently on. It is a personal website where I share my projects and my tools in the future.",
		created: [
			{ icon: "vortezz", link: "https://vortezz.dev/" },
		],
		used: ["rust", "typescript", "tailwind", "react", "bash", "english"],
		link: "https://vortezz.dev",
	},
	{
		id: "molkky",
		name: "MolkkyCount",
		picture: molkkyCountPicture,
		text: "Simple application to count the points of a Molkky game. It is a mobile application made with Flutter.",
		created: [
			{ icon: "vortezz", link: "https://vortezz.dev/" },
		],
		used: ["flutter", "english"],
		link: "https://play.google.com/store/apps/details?id=dev.vortezz.molkkycount",
	},
	{
		id: "cityofnations2",
		name: "City of Nations 2",
		picture: cityOfNationsPicture,
		text: "City of Nations 2 is a worldwide Minecraft events with streamers organized by Siphano. I was a developer for the event.",
		created: [
			{ icon: "ekalia", link: "https://ekalia.fr/" },
		],
		used: ["java", "english"],
	},
];

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

function setNextSkill(currentSkillName: string, nextSkillName: string, setSkill: (skill: string) => void) {
	if (currentSkillName === nextSkillName) {
		return;
	}

	const currentSkill = document.getElementById(currentSkillName);

	if (currentSkill) {
		if (!currentSkill.classList.contains("special-hide")) {
			currentSkill.classList.toggle("special-hide");
		}
	}

	setSkill(nextSkillName);
}

function setNextProject(currentProjectName: string, nextProjectName: string, setProject: (value: (((prevState: string) => string) | string)) => void) {
	if (currentProjectName === nextProjectName) {
		return;
	}

	const currentProject = document.getElementById(currentProjectName);
	const currentProjectElements = currentProject?.getElementsByClassName("project");

	if (currentProject && currentProjectElements) {
		for (let i = 0; i < currentProjectElements.length; i++) {
			if (!currentProjectElements[i].classList.contains("special-hide")) {
				currentProjectElements[i].classList.toggle("special-hide");
			}
		}
	}

	setProject(nextProjectName);
}

export function SkillIcon({ name, skill, setSkill }: { name: string, skill: string, setSkill: (skill: string) => void }) {
	return <i className={`vr ${name} cursor-pointer text-[calc(64px)] w-20 hover:-translate-y-1 transition-transform ${skill === name ? "text-primary-700 dark:text-primary-200" : "text-primary-200 dark:text-white"}`}
		onClick={() => {
			setNextSkill(skill, name, setSkill);
		}}></i>;
}

export function scrollToAbout() {
	const aboutElements = document.getElementsByClassName("about");

	if (aboutElements.length < 1) {
		return;
	}

	const aboutElement = aboutElements[0];

	if (!aboutElement) {
		return;
	}

	document.scrollingElement?.scrollTo(0, aboutElement.getBoundingClientRect().top + document.scrollingElement.scrollTop - 192);
}

export function scrollToSkills() {
	const skillElements = document.getElementsByClassName("skill");

	if (skillElements.length < 1) {
		return;
	}

	const skillElement = skillElements[0];

	if (!skillElement) {
		return;
	}

	document.scrollingElement?.scrollTo(0, skillElement.getBoundingClientRect().top + document.scrollingElement.scrollTop - 192);
}

export function HomePage() {
	// const appContext = useContext(AppContext);

	const [skill, setSkill] = useState("typescript");
	const [project, setProject] = useState("vortezz");
	const [projectsHovered, setProjectsHovered] = useState(false);
	const [skillsHovered, setSkillsHovered] = useState(false);
	const [skillsHeight, setSkillsHeight] = useState(0);

	useInterval(() => {
		if (skillsHovered) {
			return;
		}

		const currentSkillIndex = skills.findIndex(value => value.id === skill);
		const nextSkillIndex = currentSkillIndex + 1 >= skills.length ? 0 : currentSkillIndex + 1;
		setNextSkill(skill, skills[nextSkillIndex].id, setSkill);
	}, 5000);

	useInterval(() => {
		if (projectsHovered) {
			return;
		}

		const currentProjectIndex = projects.findIndex(value => value.id === project);
		const nextProjectIndex = currentProjectIndex + 1 >= projects.length ? 0 : currentProjectIndex + 1;
		setNextProject(project, projects[nextProjectIndex].id, setProject);
	}, 10000);

	useEffect(() => {
		const skillFiltered = skills.filter(value => value.id === skill);

		if (skillFiltered.length === 0) {
			setSkill("typescript");
		}

		const skillElement = document.getElementById(skill);

		if (!skillElement) {
			return;
		}

		if (skillElement.classList.contains("special-hide")) {
			skillElement.classList.toggle("special-hide");
		}

		if (window.screen.width <= 1024) {
			const skillsElement = document.getElementById("skills");

			if (!skillsElement) {
				return;
			}

			let localSkillsHeight = skillsHeight;

			if (skillsHeight === 0) {
				setSkillsHeight(skillsElement.clientHeight);
				localSkillsHeight = skillsElement.clientHeight;
			}

			skillElement!.parentElement!.parentElement!.style.height = `${skillElement.clientHeight + localSkillsHeight - 128}px`;
		}
	}, [skill]);

	useEffect(() => {
		const projectFiltered = projects.filter(value => value.id === project);

		if (projectFiltered.length === 0) {
			setProject("vortezz");
		}

		const projectElement = document.getElementById(project);
		const projectElements = projectElement?.getElementsByClassName("project");

		if (!projectElements) {
			return;
		}

		for (let i = 0; i < projectElements.length; i++) {
			if (projectElements[i].classList.contains("special-hide")) {
				projectElements[i].classList.toggle("special-hide");
			}
		}

		projectElement!.parentElement!.style.height = `${projectElement!.clientHeight}px`;
	}, [project]);

	return <>
		<Page>
			<div>
				<div className={"lg:min-h-[calc(100vh-96px)] mx-auto max-w-[calc(1536px)] flex flex-col justify-between"}>
					<div className={"flex justify-between lg:mt-auto mt-12"}>
						<div className={"my-auto mx-auto lg:mx-[min(100%,4rem)] flex flex-col"}>
							<h1 className={"text-primary-800 dark:text-white sm:text-4xl text-3xl font-bold px-8 md:px-0 mx-auto"}>Hi, I'm Vortezz!<br />
								A Developer and<br />
								a Nature lover 🌱
							</h1>
							<div className={"hidden lg:flex flex-wrap px-8 gap-y-4 mt-6 lg:px-0"}>
								<Button body={"Learn More"}
									color={"primary"}
									type={"primary"}
									size={"large"}
									className={"mr-8"}
									onClick={scrollToAbout} />
								{/*<Button body={"Tools"}
									color={"primary"}
									type={"secondary"}
									size={"large"} />*/}
							</div>
						</div>
						<div className={"my-auto hidden lg:block max-w-[calc(40%)] lg:mr-[min(100%,2rem)] lg:ml-[min(100%,2rem)]"}>
							<img src={topPicture}
								alt={"Top picture of mountains"} />
						</div>
					</div>
					<div className={"mt-16 mb-8 w-full max-w-[calc(1536px)] flex animate-bounce"}>
						<div className={"mx-auto flex flex-col text-primary-700 dark:text-white dark:hover:text-primary-200 hover:text-primary-300 transition-transform"}>
							<div className={"text-lg font-bold cursor-pointer mb-2"}
								onClick={scrollToAbout}>LEARN MORE
							</div>
							<i className={"vr chevron-down text-[calc(48px)] mx-auto cursor-pointer"}
								onClick={scrollToAbout}></i>
						</div>
					</div>
				</div>
				<Line background={"gray"}
					className={"about"}
					id={"about"}>
					<img src={aboutPicture}
						loading={"lazy"}
						className={"w-[calc(720px)] h-[calc(334px)] mx-auto lg:ml-[min(100%,2rem)] lg:mr-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(40%)] xl:max-w-[calc(42%)] 2xl:max-w-[calc(50%)] rounded-lg object-cover"}
						alt={"About picture"} />
					<div className={"w-[calc(720px)] mt-8 lg:my-auto mx-auto lg:mr-[min(100%,2rem)] lg:ml-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(50%)] flex flex-col"}>
						<h2 className={"text-3xl text-primary-800 dark:text-white font-bold"}>
							About me
						</h2>
						<div className={"text-lg mt-4 dark:text-white"}>
							Hi! I'm Victor, also known online as Vortezz. I'm an 18-year-old developer from France 🥖. I started coding in 2019 and specialize in building websites, mobile apps, and Minecraft plugins.
							However, I'm always eager to learn new technologies.

							Beyond coding, I'm passionate about nature - I love hiking in the mountains and capturing stunning landscapes through photography.

							Currently, I'm in a preparatory class for engineering schools at Louis-le-Grand in Paris. Since 2022, I've also been the Java Lead at <a target="_blank"
							href="https://ekalia.fr/"
							rel="noreferrer">Ekalia</a>.
						</div>
					</div>
				</Line>
				<Line background={"white"}
					className={"flex flex-col lg:flex-row lg:justify-between skill"}
					onMouseOver={() => {
						setSkillsHovered(true);
					}}
					onMouseOut={() => {
						setSkillsHovered(false);
					}}
					id={"skills"}>
					<div id={"skills"}
						className={"w-[calc(720px)] flex flex-col lg:my-auto mx-auto lg:ml-[min(100%,2rem)] lg:mr-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(40%)] xl:max-w-[calc(42%)] 2xl:max-w-[calc(44%)]"}>
						<h2 className={"text-3xl text-primary-800 dark:text-white font-bold"}>
							Skills
						</h2>
						<div className={"text-lg mt-4 gap-4 flex flex-wrap justify-around"}>
							{skills.map(({ id }) => <SkillIcon key={id}
								name={id}
								skill={skill}
								setSkill={setSkill} />)}
						</div>
					</div>
					<div className={"w-[calc(720px)] mt-16 relative lg:my-auto mx-auto lg:mr-[min(100%,2rem)] lg:ml-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(50%)] flex"}>
						{skills.map(({ id, name, text, links }) =>
							<div key={id}
								id={id}
								className={`absolute max-w-[calc(720px)] xl:max-w-full h-fit flex flex-col sm:flex-row ${skill !== id ? "special-hide" : ""} duration-500 my-auto mx-auto top-0 lg:top-[calc(50%)] lg:translate-y-[calc(-50%)]`}>
								<div className={"flex flex-col my-auto"}>
									<i className={`mx-auto vr ${id} text-[calc(96px)] text-primary-700 dark:text-primary-200`}></i>
									<div className={"mx-auto w-32 mt-4 text-center font-bold text-lg text-primary-700 dark:text-primary-200"}>{name}</div>
								</div>
								<div className={"ml-0 sm:ml-8 mt-8 sm:my-auto"}>
									<div className={"text-lg dark:text-white"}>
										{text}
									</div>
									{links.map(({ icon, url }) => <a key={icon}
										href={url}
										target={"_blank"}
										rel={"noreferrer"}>
										<i className={`vr ${icon} text-3xl text-primary-200 mt-4 mr-6 dark:text-white hover:-translate-y-1 transition-transform`}></i>
									</a>)}
								</div>
							</div>,
						)}
					</div>
				</Line>
				<Line background={"gray"}
					onMouseOver={() => {
						setProjectsHovered(true);
					}}
					onMouseOut={() => {
						setProjectsHovered(false);
					}}
					className={"h-[calc(382px)]"}
					id={"projects"}>
					<>
						{projects.map(({ id, picture, name, text, created, used, link }) =>
							<div key={id}
								id={id}
								className={`absolute flex w-full max-w-[calc(1536px)] items-center ${project !== id ? "special-hide" : ""} flex-wrap top-[calc(50%)] translate-y-[calc(-50%)]`}>
								<div className={"flex w-full max-w-[calc(1536px)] items-center justify-between flex-wrap"}>
									<div className={`flex project duration-700 w-[calc(720px)] h-[calc(334px)] mx-auto lg:ml-[min(100%,2rem)] lg:mr-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(40%)] xl:max-w-[calc(42%)] 2xl:max-w-[calc(50%)]`}>
										<img src={picture}
											loading={"lazy"}
											className={"rounded-lg object-cover h-full mx-auto"}
											alt={"About picture"} />
									</div>
									<div className={`w-[calc(720px)] project duration-700 mt-8 lg:my-auto mx-auto lg:mr-[min(100%,2rem)] lg:ml-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(46%)] xl:max-w-[calc(50%)] flex flex-col`}>
										<div className={"flex flex-row"}>
											<h2 className={"text-3xl text-primary-800 dark:text-white font-bold"}>
												{name}
											</h2>
											{
												link && <a href={link}
													target={"_blank"}
													className={"my-auto"}
													rel={"noreferrer"}>
													<i className={"vr link text-2xl text-primary-200 ml-4 dark:text-white hover:-translate-y-1 transition-transform"}></i></a>
											}
										</div>
										<div className={"text-lg mt-4 dark:text-white"}>
											{text}
										</div>
										<div className={"text-lg mt-4 text-primary-800 dark:text-white font-bold"}>
											Created for:
										</div>
										<div className={"flex flex-wrap gap-y-4 text-4xl mt-4 text-primary-200 dark:text-white"}>
											{created.map(({ icon, link }) => <a key={icon}
												href={link}
												target={"_blank"}
												rel={"noreferrer"}>
												<i className={`vr ${icon} mr-4 hover:-translate-y-1 transition-transform`} />
											</a>)}
										</div>
										<div className={"text-lg text-primary-800 dark:text-white font-bold mt-4"}>
											Skills used:
										</div>
										<div className={"flex flex-wrap gap-y-4 text-4xl mt-4 text-primary-200 dark:text-white"}>
											{used.map((icon) => <i onClick={() => {
												setNextSkill(skill, icon, setSkill);

												scrollToSkills();
											}}
												key={icon}
												className={`vr ${icon} mr-4 hover:-translate-y-1 cursor-pointer transition-transform`} />)}
										</div>
									</div>
								</div>
								<div className={"mx-auto mt-8 transition-none"}>
									<div className={"flex justify-between mx-auto"}
										style={{ width: (projects.length * 2 - 1) * 16 }}>
										{projects.map(({ id }) =>
											<div key={id}
												className={`h-4 w-4 rounded-full ${project === id ? "bg-primary-300" : "bg-white"} cursor-pointer hover:-translate-y-1 transition-transform`}
												onClick={() => {
													setNextProject(project, id, setProject);
												}} />,
										)}
									</div>
								</div>
							</div>,
						)}
					</>
				</Line>
				<Line background={"white"}
					className={"flex-col-reverse lg:flex-row"}>
					<div className={"w-[calc(720px)] flex flex-col mt-8 lg:my-auto mx-auto lg:ml-[min(100%,2rem)] lg:mr-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(40%)] xl:max-w-[calc(42%)] 2xl:max-w-[calc(50%)] "}>
						<h2 className={"text-3xl text-primary-800 dark:text-white font-bold"}>
							Contact
						</h2>
						<div className={"text-lg mt-4 dark:text-white"}>
							You want to contact me? You can send me an email at <a href={"mailto:contact@vortezz.dev"}>contact@vortezz.dev</a> or you can text me at <a href={"tel:+33652220852"}>+33 6 52 22 08 52</a> (be
							aware of surcharges if
							you are not in France).
						</div>
						<Button body={"Contact me"}
							color={"primary"}
							type={"primary"}
							size={"large"}
							className={"mt-6"}
							link={"mailto:contact@vortezz.dev"} />
					</div>
					<img src={contactPicture}
						loading={"lazy"}
						className={"w-[calc(720px)] h-[calc(334px)] rounded-lg object-cover my-auto mx-auto lg:mr-[min(100%,2rem)] lg:ml-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(50%)]"}
						alt={"Contact picture"} />
				</Line>
			</div>
		</Page>
	</>;
}