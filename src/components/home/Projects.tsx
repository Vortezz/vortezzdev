import vortezzDevPicture from "../../resources/pictures/vortezzdev.webp";
import molkkyCountPicture from "../../resources/pictures/molkkycount.webp";
import cityOfNationsPicture from "../../resources/pictures/cityofnations.webp";
import { useEffect, useState } from "react";
import { useInterval } from "../../utils/Interval";
import { Line } from "../sections/Line";

const projects: { id: string, name: string, picture: string, text: string, created: { icon: string, link: string }[], used: string[], link?: string }[] = [
	{
		id: "vortezz",
		name: "vortezz.dev",
		picture: vortezzDevPicture,
		text: "The website you are currently on. It is a personal website on which I share my projects and maybe tools in the future.",
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

export default function Projects() {
	const [project, setProject] = useState("vortezz");
	const [projectsHovered, setProjectsHovered] = useState(false);

	useInterval(() => {
		if (projectsHovered) {
			return;
		}

		const currentProjectIndex = projects.findIndex(value => value.id === project);
		const nextProjectIndex = currentProjectIndex + 1 >= projects.length ? 0 : currentProjectIndex + 1;
		setNextProject(project, projects[nextProjectIndex].id, setProject);
	}, 10000);

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

	return <Line background={"gray"}
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
								{used.map((icon) => <i
									key={icon}
									className={`vr ${icon} mr-4 hover:-translate-y-1 transition-transform`} />)}
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
	</Line>;
}