import { Page } from "../../components/pages/Page";
import { Link } from "react-router-dom";
import { pictures } from "../../resources/gallery/gallery_data";

export default function GalleryPage() {
	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-[80%] max-w-[calc(800px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"text-3xl text-primary-800 dark:text-white mb-8 font-bold"}>Gallery</h1>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>CONTEXT</h2>
					<div className={"mb-4 dark:text-white"}>
						Welcome to my <span className={"italic"}>Gallery</span>, a visual journey through the beauty of nature. Here, you'll find a curated collection of my favorite photographs, showcasing stunning
						landscapes and captivating wildlife
						moments. <br /><br />

						Please note that all images displayed in this gallery are my original work and are licensed under the <a target={"_blank"}
						rel={"noreferrer"}
						href={"https://creativecommons.org/licenses/by/4.0/"}>CC BY 4.0
						<img
							className={"h-6 w-6 rounded-lg inline ml-1 align-middle"}
							src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
							alt="" />
						<img
							className={"h-6 w-6 rounded-lg inline align-middle"}
							src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
							alt="" /> license</a>.
						You are welcome to use them freely, provided that proper attribution is
						given to
						@vortezz.dev.
					</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>PICTURES</h2>
					<div className={"grid sm:grid-cols-3 grid-cols-2"}>
						{pictures.map((picture, index) => (
							<div className={"p-2"}
								key={index}>
								<Link to={`/gallery/${picture.id}`}>
									<img className={`rounded-md hover:-translate-y-1 w-full h-full aspect-square object-cover transition-all`}
										src={`https://cdn.vortezz.dev/gallery/${picture.id}-compressed.webp`}></img>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	</Page>;
}