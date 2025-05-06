import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import React from "react";
import { Error404Page } from "./pages/special/Error404Page";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { AttributionsPage } from "./pages/legal/AttributionsPage";
import ScrollToTop from "./components/AutoScroll";
import { ChangelogPage } from "./pages/legal/ChangelogPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import ViewingPage from "./pages/gallery/ViewingPage";

export function App() {
	if (localStorage.getItem("theme") === "dark") {
		document.documentElement.classList.add("dark");
	}

	return <>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				{/* Home */}
				<Route path="/"
					element={<HomePage />} />

				{/* Gallery */}
				<Route path="/gallery"
					element={<GalleryPage />} />
				<Route path="/gallery/:id"
					element={<ViewingPage />} />

				{/* Legal */}
				<Route path={"/privacy"}
					element={<PrivacyPage />} />
				<Route path={"/attributions"}
					element={<AttributionsPage />} />
				<Route path={"/changelog"}
					element={<ChangelogPage />} />

				{/* Special */}
				{/*<Route path={"/2025"}*/}
				{/*	element={<NewYearPage />} />*/}
				<Route path={"*"}
					element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	</>;
}