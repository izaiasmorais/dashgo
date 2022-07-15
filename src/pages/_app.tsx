import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SidebarDrawerContextProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

import "../styles/global.css";
import Head from "next/head";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextProvider>
          <Head>
            <title>Q Acadêmico</title>
          </Head>
          <NextNProgress color="#ff0090" />
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
