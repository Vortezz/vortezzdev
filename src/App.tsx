import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import React from "react";
import { Error404Page } from "./pages/special/Error404Page";
import { PrivacyPage } from "./pages/legal/PrivacyPage";
import { AttributionsPage } from "./pages/legal/AttributionsPage";

export function App() {
	if (localStorage.getItem("theme") === "dark") {
		document.documentElement.classList.add("dark");
	}

	return <>
		<BrowserRouter>
			<Routes>
				{/* Home */}
				<Route path="/"
					element={<HomePage />} />

				{/* Legal */}
				<Route path={"/privacy"}
					element={<PrivacyPage />} />
				<Route path={"/attributions"}
					element={<AttributionsPage />} />

				{/* 404 */}
				<Route path={"*"}
					element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	</>;
}