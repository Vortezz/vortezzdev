import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";

export function Page({ children }: { children: JSX.Element }) {
	return <div className={"leading-snug flex flex-col min-h-screen h-fit bg-white dark:bg-gray-833 scroll-smooth"}>
		<Navbar />
		{children}
		<Footer />
	</div>;
}