import type { AppProps } from "next/app";
import { SidebarDrawerContextProvider } from "../contexts/SidebarDrawerContext";
import { QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { queryClient } from "../services/react-query";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import "../styles/global.css";

if (process.env.NODE_ENV === "development") {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerContextProvider>
					<Head>
						<title>dashgo</title>
					</Head>
					<NextNProgress color="#ff0090" />
					<Component {...pageProps} />
				</SidebarDrawerContextProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;
