import { Page } from "../components/pages/Page";
import { Button } from "../components/actions/Button";

import topPicture from "../resources/pictures/top_picture.webp";
import aboutPicture from "../resources/pictures/about_picture.webp";
import contactPicture from "../resources/pictures/contact.webp";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import { Line } from "../components/sections/Line";

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
							Hi! I'm Victor, also known online as Vortezz. I'm an 19-year-old developer from France 🥖. I started coding in 2019 and specialize in building websites, mobile apps, and Minecraft plugins.
							However, I'm always eager to learn new technologies.

							Beyond coding, I'm passionate about nature - I love hiking in the mountains and capturing stunning landscapes through photography.

							I'm currently enrolled in the Ingénieur Polytechnicien Program at Ecole Polytechnique in Palaiseau (near Paris). Since 2022, I've also been the Java Lead at <a target="_blank"
							href="https://ekalia.fr/"
							rel="noreferrer">Ekalia</a>.
						</div>
					</div>
				</Line>
				<Skills />
				<Projects />
				<Line background={"white"}
					className={"flex-col-reverse lg:flex-row"}>
					<div className={"w-[calc(720px)] flex flex-col mt-8 lg:my-auto mx-auto lg:ml-[min(100%,2rem)] lg:mr-[min(100%,1rem)] max-w-[calc(80%)] lg:max-w-[calc(40%)] xl:max-w-[calc(42%)] 2xl:max-w-[calc(50%)] "}>
						<h2 className={"text-3xl text-primary-800 dark:text-white font-bold"}>
							Contact
						</h2>
						<div className={"text-lg mt-4 dark:text-white"}>
							You want to contact me? Send me an email at <a href={"mailto:contact@vortezz.dev"}>contact@vortezz.dev</a> or text me at <a href={"tel:+33652220852"}>+33 6 52 22 08 52</a> (be
							aware of surcharges if
							you are not in France)!
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
