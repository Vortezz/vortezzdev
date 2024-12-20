import { Page } from "../../components/pages/Page";

export function AttributionsPage() {
	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-[80%] max-w-[calc(800px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"text-3xl text-primary-800 dark:text-white mb-8 font-bold"}>Attributions</h1>
					<div className={"mb-4 dark:text-white"}>
						I would like to thank the following people and projects for their work and their help in the creation of this website:
					</div>
					<h2 className={"mb-4 text-primary-800 dark:text-white font-bold text-xl"}>FRONTEND</h2>
					<ul className={"mb-4 dark:text-white"}>
						<li>Icons from <a href="https://boxicons.com/"
							rel={"noreferrer"}
							target={"_blank"}>boxicons</a></li>
						<li><a href="https://www.npmjs.com/package/dom-parser"
							rel={"noreferrer"}
							target={"_blank"}>dom-parser</a></li>
						<li><a href="https://www.npmjs.com/package/lexical"
							rel={"noreferrer"}
							target={"_blank"}>lexical</a></li>
						<li><a href="https://www.npmjs.com/package/node-fetch"
							rel={"noreferrer"}
							target={"_blank"}>node-fetch</a></li>
						<li><a href="https://reactjs.org/"
							rel={"noreferrer"}
							target={"_blank"}>react</a></li>
						<li><a href="https://reactjs.org/docs/react-dom.html"
							rel={"noreferrer"}
							target={"_blank"}>react-dom</a></li>
						<li><a href="https://www.npmjs.com/package/react-markdown"
							rel={"noreferrer"}
							target={"_blank"}>react-markdown</a></li>
						<li><a href="https://reactrouter.com/"
							rel={"noreferrer"}
							target={"_blank"}>react-router-dom</a></li>
						<li><a href="https://www.npmjs.com/package/react-router-hash-link"
							rel={"noreferrer"}
							target={"_blank"}>react-router-hash-link</a></li>
						<li><a href="https://www.npmjs.com/package/react-scripts"
							rel={"noreferrer"}
							target={"_blank"}>react-scripts</a></li>
						<li><a href="https://react-syntax-highlighter.github.io/react-syntax-highlighter/"
							rel={"noreferrer"}
							target={"_blank"}>react-syntax-highlighter</a></li>
						<li><a href="https://www.npmjs.com/package/react-turnstile"
							rel={"noreferrer"}
							target={"_blank"}>react-turnstile</a></li>
						<li><a href="https://www.typescriptlang.org/"
							rel={"noreferrer"}
							target={"_blank"}>typescript</a></li>
						<li><a href="https://github.com/GoogleChrome/web-vitals"
							rel={"noreferrer"}
							target={"_blank"}>web-vitals</a></li>
						<li><a href="https://www.npmjs.com/package/@babel/core"
							rel={"noreferrer"}
							target={"_blank"}>babel-core</a></li>
						<li><a href="https://www.npmjs.com/package/concurrently"
							rel={"noreferrer"}
							target={"_blank"}>concurrently</a></li>
						<li><a href="https://eslint.org/"
							rel={"noreferrer"}
							target={"_blank"}>eslint</a></li>
						<li><a href="https://www.npmjs.com/package/tailwindcss"
							rel={"noreferrer"}
							target={"_blank"}>tailwindcss</a></li>
						<li><a href="https://www.npmjs.com/package/storybook"
							rel={"noreferrer"}
							target={"_blank"}>storybook</a></li>
						<li><a href="https://www.npmjs.com/package/daisyui"
							rel={"noreferrer"}
							target={"_blank"}>daisyui</a></li>
						<li><a href="https://www.pexels.com/@lum3n-44775/"
							rel={"noreferrer"}
							target={"_blank"}>Contact picture by Lum3n</a></li>
					</ul>
					<h2 className={"mb-4 text-primary-800 dark:text-white font-bold text-xl"}>BACKEND</h2>
					<div className={"mb-4 dark:text-white"}>There is no backend enabled at the moment.</div>
				</div>
			</div>
		</div>
	</Page>;
}