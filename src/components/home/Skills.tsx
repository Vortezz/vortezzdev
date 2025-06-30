import { useEffect, useState } from "react";
import { useInterval } from "../../utils/Interval";
import { Line } from "../sections/Line";

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

export function SkillIcon({ name, skill, setSkill }: { name: string, skill: string, setSkill: (skill: string) => void }) {
	return <i className={`vr ${name} cursor-pointer text-[calc(64px)] w-20 hover:-translate-y-1 transition-transform ${skill === name ? "text-primary-700 dark:text-primary-200" : "text-primary-200 dark:text-white"}`}
		onClick={() => {
			setNextSkill(skill, name, setSkill);
		}}></i>;
}

export default function Skills() {
	const [skill, setSkill] = useState("typescript");
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

	return <Line background={"white"}
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
	</Line>;
}