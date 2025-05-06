import { Page } from "../../components/pages/Page";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/actions/Button";
import { pictures } from "../../resources/gallery/gallery_data";
import { useState } from "react";

export default function ViewingPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [imageLoaded, setImageLoaded] = useState(false);

	const data = pictures.find((p) => p.id === id);

	if (!data) {
		return <Navigate to={"/gallery"}
			replace />;
	}

	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-[80%] max-w-[calc(800px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<div className={"flex flex-wrap justify-between"}>
						<h1 className={"text-3xl text-primary-800 dark:text-white mb-1 font-bold"}>{data.name}</h1>
						<Button
							onClick={() => navigate(`/gallery`)}
							size={"small"}
							body={"Go back"}
							className={"my-auto mb-4"}
							color={"primary"}></Button>
					</div>
					<div className={"flex flex-wrap justify-start mb-8"}>
						<div className={"flex text-gray-400 mr-4"}>
							<i className={"vr pin my-auto text-xl"} />
							<div className={"my-auto ml-2"}>
								{data.location}
							</div>
						</div>
						<div className={"flex text-gray-400"}>
							<i className={"vr date my-auto text-xl"} />
							<div className={"my-auto ml-2"}>
								{new Date(data.timestamp).toLocaleDateString()}
							</div>
						</div>
					</div>
					<div className={"mb-4 dark:text-white"}>
						{data.description}
					</div>
					<div className={"w-[100%]"}>
						<img className={`${imageLoaded ? "" : "bg-gray-100 h-[40rem] animate-pulse"} rounded-md object-fill`}
							src={`https://cdn.vortezz.dev/gallery/${data.id}.webp`}
							onLoad={() => setImageLoaded(true)}
						/>
					</div>
				</div>
			</div>
		</div>
	</Page>;
}