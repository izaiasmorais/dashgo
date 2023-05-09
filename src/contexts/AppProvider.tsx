import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/react-query";
import { SidebarDrawerContextProvider } from "./SidebarDrawerContext";
import { theme } from "../styles/theme";

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerContextProvider>{children}</SidebarDrawerContextProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
};
