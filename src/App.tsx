import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import React from "react";
import { Error404Page } from "./pages/special/Error404Page";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { AttributionsPage } from "./pages/legal/AttributionsPage";
import { NewYearPage } from "./pages/special/NewYearPage";
import ScrollToTop from "./components/AutoScroll";

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

				{/* Legal */}
				<Route path={"/privacy"}
					element={<PrivacyPage />} />
				<Route path={"/attributions"}
					element={<AttributionsPage />} />

				{/* Special */}
				<Route path={"/2025"}
					element={<NewYearPage />} />
				<Route path={"*"}
					element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	</>;
}