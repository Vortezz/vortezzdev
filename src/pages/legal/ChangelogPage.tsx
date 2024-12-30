import { Page } from "../../components/pages/Page";
import { useState } from "react";

interface ChangelogData {
	author: {
		name: string;
		avatar: string;
	};
	commit: {
		title: string;
		description: string;
		type: string;
	};
	sha: string;
	htmlUrl: string;
}

function ChangelogComponent({ data }: { data: ChangelogData }) {
	return <div className={"my-4"}>
		<div className={"flex my-4"}>
			<div className={`bg-primary-800 dark:bg-white dark:text-primary-800 rounded-full px-4 text-white font-bold leading-none h-fit py-2`}>
				{data.commit.type}
			</div>
			<div className={`ml-4 text-xl text-primary-800 dark:text-white font-bold`}>{data.commit.title}</div>
		</div>
		<div className={"flex mt-4"}>
			<div className={"flex flex-col"}>
				<div className={"flex"}>
					<img src={data.author.avatar}
						className={"rounded-full h-8 w-8 bg-gray"} />
					<div className={"ml-2 dark:text-white font-semibold h-8 flex"}>
						<div className={"my-auto"}>{data.author.name}</div>
					</div>
				</div>
				<a href={data.htmlUrl}
					target={"_blank"}
					rel="noopener noreferrer"
					className={"font-thin text-gray-300 mt-2 text-sm mx-auto"}>SHA: {data.sha}</a>
			</div>
			<div className={"ml-4 text-gray-400 italic dark:text-white leading-none mt-2"}>
				<div className={"my-auto"}>{data.commit.description ? data.commit.description : "No description provided"}</div>
			</div>
		</div>
	</div>;
}

export function ChangelogPage() {
	const [updates, setUpdates] = useState<ChangelogData[]>([]);

	if (updates.length === 0) {
		fetch("https://api.github.com/repositories/823562453/commits?per_page=20")
			.then(res => res.json())
			.then(data => {
				const resp = [];

				for (const value of data) {
					const message = value.commit.message as string;
					const splitted = message.split("\n");
					let title = splitted[0];

					let description = splitted.slice(1).join("\n");
					if (splitted.length > 1 && splitted[1] === "") {
						description = splitted.slice(2).join("\n");
					}

					let type = "???";
					if (title.match(/(fix|feat|wip):.*/gm)) {
						let groups = message.matchAll(/(fix|feat|wip):.*/gm).next();

						if (groups) {
							type = groups.value[1].toUpperCase();

							title = title.substring(type.length + 1).trim();
							title = title[0].toUpperCase() + title.substring(1);
						}
					}

					resp.push({
						author: {
							name: value.author.login,
							avatar: value.author.avatar_url,
						},
						commit: {
							title: title,
							type: type,
							description: description,
						},
						sha: value.sha.slice(0, 7),
						htmlUrl: value.html_url,
					});
				}

				setUpdates(resp);
			});
	}

	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-[80%] max-w-[calc(800px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"text-3xl text-primary-800 dark:text-white mb-8 font-bold"}>Changelog</h1>
					<div className={"mb-4 dark:text-white"}>
						Wanna know what changed since your last visit? Track all updates of this website, directly linked to the github repo with real time updates:
					</div>
					{updates.length == 0 ? <div className={"flex flex-col"}>
						<div className={"animate-pulse h-24 w-full rounded-2xl bg-gray-200 dark:bg-primary-700 my-4"}></div>
						<div className={"animate-pulse h-32 w-full rounded-2xl bg-gray-200 dark:bg-primary-700 my-4"}></div>
						<div className={"animate-pulse h-28 w-full rounded-2xl bg-gray-200 dark:bg-primary-700 my-4"}></div>
						<div className={"animate-pulse h-32 w-full rounded-2xl bg-gray-200 dark:bg-primary-700 my-4"}></div>
					</div> : updates.map(
						(data, index) => <ChangelogComponent key={index}
							data={data} />,
					)}
				</div>
			</div>
		</div>
	</Page>;
}