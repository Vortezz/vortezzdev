import { Page } from "../../components/pages/Page";
import { useEffect, useState } from "react";

export function NewYearPage() {
	const targetTimestamp = 1735686000000;

	const [days, setDays] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [seconds, setSeconds] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentTimestamp = Date.now();
			const delta = (targetTimestamp - currentTimestamp) / 1000;

			setDays((_) => Math.floor(delta / 86400));
			setHours((_) => Math.floor((delta / 3600) % 24));
			setMinutes((_) => Math.floor((delta / 60) % 60));
			setSeconds((_) => Math.floor(delta % 60));
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-full max-w-[calc(1536px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"sm:text-[3rem] text-3xl text-primary-800 dark:text-white font-bold mx-auto leading-none"}>TIME BEFORE 2025:</h1>
					<div className={"flex flex-row flex-wrap mt-8"}>
						<div className={"flex flex-row flex-wrap mx-auto"}>
							<div className={"flex flex-col mx-auto w-48"}>
								<h2 className={"text-[6rem] text-primary-800 dark:text-white font-bold leading-none mx-auto"}>{("0" + days).slice(-2)}</h2>
								<h2 className={"text-xl text-primary-800 dark:text-white mb-8 font-thin mx-auto"}>DAYS</h2>
							</div>
							<div className={"flex flex-col mx-auto w-48"}>
								<h2 className={"text-[6rem] text-primary-800 dark:text-white font-bold leading-none mx-auto"}>{("0" + hours).slice(-2)}</h2>
								<h2 className={"text-xl text-primary-800 dark:text-white mb-8 font-thin mx-auto"}>HOURS</h2>
							</div>
						</div>
						<div className={"flex flex-row flex-wrap mx-auto"}>
							<div className={"flex flex-col mx-auto w-48"}>
								<h2 className={"text-[6rem] text-primary-800 dark:text-white font-bold leading-none mx-auto"}>{("0" + minutes).slice(-2)}</h2>
								<h2 className={"text-xl text-primary-800 dark:text-white mb-8 font-thin mx-auto"}>MINUTES</h2>
							</div>
							<div className={"flex flex-col mx-auto w-48"}>
								<h2 className={"text-[6rem] text-primary-800 dark:text-white font-bold leading-none mx-auto"}>{("0" + seconds).slice(-2)}</h2>
								<h2 className={"text-xl text-primary-800 dark:text-white mb-8 font-thin mx-auto"}>SECONDS</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Page>
		;
}