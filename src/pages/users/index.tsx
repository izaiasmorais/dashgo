import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Th,
	Text,
	Thead,
	Tr,
	useBreakpointValue,
	Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import NextLink from "next/link";
import axios from "axios";

interface IUser {
	id: string;
	name: string;
	email: string;
	createdAt: string;
}

export default function UserList() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isWildVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/users")
			.then((response) => console.log(response.data.users));
	}, []);

	if (mounted) {
		return (
			<Box>
				<Header />

				<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
					<Sidebar />

					<Box flex="1" borderRadius={8} bg="gray.800" p="8">
						<Flex mb="8" justify="space-between" align="center">
							<Heading fontSize="1.5rem" fontWeight="500">
								Usuários
								{/* {!isLoading && isRefetching && (
								<Spinner size="sm" color="gray.500" ml="4" />
							)} */}
							</Heading>

							<NextLink href="/users/create" passHref>
								<Button
									as="a"
									size="sm"
									fontSize="sm"
									colorScheme="pink"
									leftIcon={<Icon as={RiAddLine} fontSize="20" />}
								>
									Criar novo
								</Button>
							</NextLink>
						</Flex>

						<Table colorScheme="whiteAlpha">
							<Thead>
								<Tr>
									<Th px={["0", "4", "6"]} color="gray.300" w="8">
										<Checkbox colorScheme="pink" />
									</Th>
									<Th color="gray.500">Usuário</Th>
									{isWildVersion && <Th color="gray.500">Data de cadastro</Th>}
									<Th w="8"></Th>
								</Tr>
							</Thead>

							<Tbody>
								<Tr key="sdcfsdf">
									<Td px={["0", "4", "6"]}>
										<Checkbox colorScheme="pink" />
									</Td>
									<Td>
										<Box>
											<Link color="purple.400">
												<Text fontWeight="bold">Izaías Lima</Text>
											</Link>
											<Text fontSize="sm" color="gray.300">
												izaiaslima356@gmail.com
											</Text>
										</Box>
									</Td>
									{isWildVersion && <Td>15/07/2023</Td>}
									<Td>
										<Button
											as="a"
											size="sm"
											fontSize="sm"
											colorScheme="purple"
											leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
										>
											Editar
										</Button>
									</Td>
								</Tr>
							</Tbody>
						</Table>
					</Box>
				</Flex>
			</Box>
		);
	}
}
