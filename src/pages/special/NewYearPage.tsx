import { Page } from "../../components/pages/Page";
import { CSSProperties, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactConfetti from "react-confetti";

export function NewYearPage() {
	const targetTimestamp = 1735686000000;

	const currentTimestamp = Date.now();
	const delta = (targetTimestamp - currentTimestamp) / 1000;

	const [days, setDays] = useState<number>(Math.floor(delta / 86400));
	const [hours, setHours] = useState<number>(Math.floor((delta / 3600) % 24));
	const [minutes, setMinutes] = useState<number>(Math.floor((delta / 60) % 60));
	const [seconds, setSeconds] = useState<number>(Math.floor(delta % 60));

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
			<Helmet>
				<title>{`${delta <= 0 ? "2025 is NOW!" : `${days}d ${hours}h ${minutes}m ${seconds}s until 2025`}`}</title>
				<meta name="description"
					content="Keep track of the time left before 2025!" />
				<meta property="og:description"
					content="Keep track of the time left before 2025!" />
				<meta property="twitter:description"
					content="Keep track of the time left before 2025!" />
			</Helmet>
			{delta <= 0 ? <div className={"mx-auto w-full max-w-[calc(1536px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
					<div className={"m-auto flex flex-col"}>
						<ReactConfetti></ReactConfetti>
						<h1 className={"sm:text-[6rem] text-4xl text-primary-800 dark:text-white font-bold mx-auto leading-none"}>2025 IS NOW!</h1>
						<h2 className={"sm:text-[3rem] text-2xl max-w-[80%] text-center mt-8 text-primary-800 dark:text-white font-bold mx-auto leading-none"}>Have a nice year everybody :)</h2>
					</div>
				</div>
				:
				<div className={"mx-auto w-full max-w-[calc(1536px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
					<div className={"m-auto flex flex-col"}>
						<h1 className={"sm:text-[3rem] text-3xl text-primary-800 dark:text-white font-bold mx-auto leading-none"}>TIME BEFORE 2025:</h1>
						<div className={"flex flex-row flex-wrap mt-8"}>
							<div className={"flex flex-row flex-wrap mx-auto"}>
								<div className={"flex flex-col mx-auto w-48 text-center hover:-translate-y-1 transition-transform"}>
									<div className={`countdown text-[6rem] ${days == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} font-bold leading-none mx-auto`}>
										<span style={{ "--value": ("0" + days).slice(-2) } as CSSProperties}></span>
									</div>
									<h2 className={`text-xl ${days == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} mb-8 font-thin mx-auto`}>DAYS</h2>
								</div>
								<div className={"flex flex-col mx-auto w-48 text-center hover:-translate-y-1 transition-transform"}>
									<div className={`countdown text-[6rem] ${days == 0 && hours == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} font-bold leading-none mx-auto`}>
										<span style={{ "--value": ("0" + hours).slice(-2) } as CSSProperties}></span>
									</div>
									<h2 className={`text-xl ${days == 0 && hours == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} mb-8 font-thin mx-auto`}>HOURS</h2>
								</div>
							</div>
							<div className={"flex flex-row flex-wrap mx-auto"}>
								<div className={"flex flex-col mx-auto w-48 text-center hover:-translate-y-1 transition-transform"}>
									<div className={`countdown text-[6rem] ${days == 0 && hours == 0 && minutes == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} font-bold leading-none mx-auto`}>
										<span style={{ "--value": ("0" + minutes).slice(-2) } as CSSProperties}></span>
									</div>
									<h2 className={`text-xl ${days == 0 && hours == 0 && minutes == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} mb-8 font-thin mx-auto`}>MINUTES</h2>
								</div>
								<div className={"flex flex-col mx-auto text-center w-48 hover:-translate-y-1 transition-transform"}>
									<div className={`countdown text-[6rem] ${days == 0 && hours == 0 && minutes == 0 && seconds == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} font-bold leading-none mx-auto`}>
										<span style={{ "--value": ("0" + seconds).slice(-2) } as CSSProperties}></span>
									</div>
									<h2 className={`text-xl ${days == 0 && hours == 0 && minutes == 0 && seconds == 0 ? "text-primary-300" : "text-primary-800 dark:text-white"} mb-8 font-thin mx-auto`}>SECONDS</h2>
								</div>
							</div>
						</div>
					</div>
				</div>}
		</div>
	</Page>;
}