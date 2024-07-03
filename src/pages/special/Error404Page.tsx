import { Page } from "../../components/pages/Page";
import { Button } from "../../components/actions/Button";

export function Error404Page() {
	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-full max-w-[calc(1536px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"text-[8rem] text-primary-800 dark:text-white font-bold mx-auto leading-none"}>404</h1>
					<h2 className={"text-3xl text-primary-800 dark:text-white mb-8 font-bold mx-auto"}>PAGE NOT FOUND</h2>
					<div className={"mx-[min(100%,2rem)] mb-4 dark:text-white"}>It seem that this page have been lost in the Internet, if you think this is an error, please contact us.</div>
					<Button body={"Go back"}
						color={"primary"}
						className={"mt-4 mx-auto"}
						onClick={() => {
							window.history.back();
						}} />
				</div>
			</div>
		</div>
	</Page>;
}