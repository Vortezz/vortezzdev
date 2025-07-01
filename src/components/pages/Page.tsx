import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import ReactConfetti from "react-confetti";
import { JSX } from "react";

export function Page({ children }: { children: JSX.Element }) {
	const date = new Date();

	return <div className={"leading-snug flex flex-col min-h-screen h-fit bg-white dark:bg-gray-833 scroll-smooth"}>
		<Navbar />
		{date.getDate() == 16 && date.getMonth() == 6 ?
			<ReactConfetti></ReactConfetti> : <></>}
		{children}
		<Footer />
	</div>;
}