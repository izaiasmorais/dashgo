import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Chart } from "../components/Chart";

export default function Dashboard() {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Vendas do mês
						</Text>
						<Chart />
					</Box>
					<Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
						<Text fontSize="lg" mb="4">
							Taxa de abertura
						</Text>
						<Chart />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
