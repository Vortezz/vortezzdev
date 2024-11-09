import { Page } from "../../components/pages/Page";
import { Link } from "react-router-dom";

export function PrivacyPage() {
	return <Page>
		<div className={`py-24 w-full flex relative`}>
			<div className={"mx-auto w-[80%] max-w-[calc(800px)] flex flex-wrap justify-around flex-col 2xl:flex-row gap-y-16"}>
				<div className={"m-auto flex flex-col"}>
					<h1 className={"text-3xl text-primary-800 dark:text-white mb-8 font-bold"}>Privacy Policy</h1>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>PRIVACY & DATA</h2>
					<div className={"mb-4 dark:text-white"}>Your privacy is important to us. It is Vortezz's policy to respect your privacy regarding any information we may collect from you across our
						website, <a href="https://vortezz.dev">https://vortezz.dev</a>, and other sites or apps we own and operate, listed below :
						<ul className={"list-disc list-inside"}>
							<li><Link to={"/"}
								target={"_blank"}
								rel={"noreferrer"}>vortezz.dev</Link></li>
							<li><a href={"https://play.google.com/store/apps/details?id=dev.vortezz.td"}
								target={"_blank"}
								rel={"noreferrer"}>Truth Or Dare</a></li>
							<li><a href={"https://play.google.com/store/apps/details?id=dev.vortezz.molkkycount"}
								target={"_blank"}
								rel={"noreferrer"}>Mölkky Count</a></li>
							<li><a href={"https://play.google.com/store/apps/details?id=dev.vortezz.sanssurtaxe"}
								target={"_blank"}
								rel={"noreferrer"}>Sans Surtaxe</a></li>
						</ul>
						<br />
						At the moment, we do not collect any data from you, but we may do in the future, only if we need
						to access it to create a better experience for you.
					</div>
					<div className={"mb-4 dark:text-white"}>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge
						and consent. We also let you know why we’re collecting it and how it will be used. When we will collect your data, you will be informed and you will have the possibility to download it or delete
						at any time.
					</div>
					<div className={"mb-4 dark:text-white"}>Please note that we may change this policy in the future, but we will notify you if we do. The last update of this policy was on the 9th of November 2024.</div>
					<div className={"mb-4 dark:text-white"}>
						If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a> or by phone at <a href={"tel:+33652220852"}>+33 6 52 22 08
						52</a> (be
						aware of surcharges if
						you are not in France).
					</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>OPERATOR</h2>
					<div className={"mb-4 dark:text-white"}>This website is operated by Victor Sarrazin under the pseudonym of Vortezz.<br /><br />
						Phone: <a href={"tel:+33652220852"}>+33 6 52 22 08 52</a><br />
						Email: <a href="mailto:contact@vortezz.dev">contact@vortezz.dev</a>
					</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>HOSTING</h2>
					<div className={"mb-4 dark:text-white"}>This website is proudly hosted by <a href={"https://privateheberg.net/"}>PrivateHeberg</a>.<br /><br />
						Name: Ancelade SAS<br />
						Social form: SAS<br />
						Post Address: 128 rue de la Boétie, 75008 Paris, France<br />
						Email: <a href="mailto:commercial@ancelade.com">commercial@ancelade.com</a>
					</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>COOKIES</h2>
					<div className={"mb-4 dark:text-white"}>No cookies are used on this website.</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>CLOUDFLARE</h2>
					<div className={"mb-4 dark:text-white"}>This website uses Cloudflare to protect itself against DDoS attacks and to improve the loading speed of the website. Cloudflare may collect some data about you,
						but we do not have access to it. You can find more information about Cloudflare's privacy policy <a target={"_blank"}
							rel={"noreferrer"}
							href={"https://www.cloudflare.com/privacypolicy/"}>here</a>. We don't use Cloudflare's analytics
						because we don't want to collect any data about you.
					</div>
					<h2 className={"mb-4 dark:text-white font-bold text-xl"}>LICENSE</h2>
					<div className={"mb-4 dark:text-white"}>This website is fully open-source and you can find the source code on <a target={"_blank"}
						rel={"noreferrer"}
						href={"https://github.com/Vortezz/vortezzdev"}>GitHub</a>.<br /><br />
						It is licensed under GNU GPLv3.0. It means that you can use, modify, and redistribute this website as long as you respect the license and the original author (Vortezz). You can find more
						informations
						about the license <a href={"https://www.gnu.org/licenses/gpl-3.0.en.html"}>here</a>.
					</div>
				</div>
			</div>
		</div>
	</Page>;
}