import { useState, useEffect } from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { ApexChart } from "../components/Chart";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
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
								Inscritos da semana
							</Text>
							<ApexChart />
						</Box>
						<Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
							<Text fontSize="lg" mb="4">
								Taxa de abertura
							</Text>
							<ApexChart />
						</Box>
					</SimpleGrid>
				</Flex>
			</Flex>
		);
	}
}
