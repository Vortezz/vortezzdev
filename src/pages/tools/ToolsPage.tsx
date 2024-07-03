import { Page } from "../../components/pages/Page";

export function ToolsPage() {
	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-full max-w-[720px] flex flex-wrap justify-around flex-col"}>
				<div className={"text-4xl font-bold text-primary-800 dark:text-white mb-4"}>
					Tools
				</div>
				<div className={"text-justify mb-12"}>
					We have created some tools to help you in your daily life. You can find here a password generator, a random number generator, and a random string generator for example. We will add more tools in the
					future, so stay tuned!
				</div>
			</div>
		</div>
	</Page>;
}