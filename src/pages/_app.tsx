import type { AppProps } from "next/app";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { makeServer } from "../services/mirage";
import { AppProvider } from "../contexts/AppProvider";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/global.css";

if (process.env.NODE_ENV === "development") {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<Head>
				<title>dashgo</title>
			</Head>
			<NextNProgress color="#ff0090" />
			<Component {...pageProps} />

			<ReactQueryDevtools />
		</AppProvider>
	);
}

export default MyApp;
