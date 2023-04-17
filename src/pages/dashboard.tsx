import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Chart } from "../components/Chart";

export default function Dashboard() {
	return (
		<Flex direction="column" h="100vh">
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Flex direction="column" w="100%">
					<SimpleGrid
						gap="4"
						mb="6"
						minChildWidth={320}
						alignContent="flex-start"
						gridColumn="2fr 1fr"
					>
						<Flex
							bg="gray.800"
							direction="column"
							p="4"
							fontWeight={500}
							gap={2}
							borderRadius={8}
						>
							<Text>Recebimentos do mês</Text>
							{/* <Flex w="100%"> */}
								<Chart />
							{/* </Flex> */}
						</Flex>

						<Flex
							bg="gray.800"
							direction="column"
							p="4"
							fontWeight={500}
							gap={2}
							borderRadius={8}
						>
							<Text>Fluxo de investimento</Text>
							<Chart />
						</Flex>
					</SimpleGrid>
				</Flex>
			</Flex>
		</Flex>
	);
}
