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
	Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../hooks/useUsers";
import NextLink from "next/link";
import { queryClient } from "../../services/react-query";
import { api } from "../../services/axios";

export default function UserList() {
	const [page, setPage] = useState(1);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isWildVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const { data, isLoading, isRefetching, error } = useUsers(page);

	async function handlePrefecthUser(userId: number) {
		await queryClient.prefetchQuery(
			["user", userId],
			async () => {
				const response = await api.get(`user/${userId}`);

				return response.data;
			},
			{
				staleTime: 1000 * 60 * 10,
			}
		);
	}

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
								{!isLoading && isRefetching && (
									<Spinner size="sm" color="gray.500" ml="4" />
								)}
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

						{isLoading && (
							<Flex justify="center">
								<Spinner />
							</Flex>
						)}

						{error && (
							<Flex justify="center">Falha ao obiter dados dos usuários.</Flex>
						)}

						{data && (
							<>
								<Table colorScheme="whiteAlpha">
									<Thead>
										<Tr>
											<Th
												px={["0", "4", "6"]}
												color="gray.300"
												w="8"
												borderColor="gray.700"
											>
												<Checkbox colorScheme="pink" />
											</Th>
											<Th color="gray.500" borderColor="gray.700">
												Usuário
											</Th>
											{isWildVersion && (
												<Th color="gray.500" borderColor="gray.700">
													Data de cadastro
												</Th>
											)}
											<Th w="8" borderColor="gray.700"></Th>
										</Tr>
									</Thead>

									<Tbody>
										{data.users.map((user) => {
											return (
												<Tr key="sdcfsdf">
													<Td px={["0", "4", "6"]} borderColor="gray.700">
														<Checkbox colorScheme="pink" />
													</Td>
													<Td borderColor="gray.700">
														<Box>
															<Link
																color="purple.400"
																onMouseEnter={() => handlePrefecthUser(user.id)}
															>
																<Text fontWeight="bold">{user.name}</Text>
															</Link>
															<Text fontSize="sm" color="gray.300">
																{user.email}
															</Text>
														</Box>
													</Td>
													{isWildVersion && (
														<Td borderColor="gray.700">{user.createdAt}</Td>
													)}
													<Td borderColor="gray.700">
														<Button
															as="a"
															size="sm"
															fontSize="sm"
															colorScheme="purple"
															leftIcon={
																<Icon as={RiPencilLine} fontSize="16" />
															}
														>
															Editar
														</Button>
													</Td>
												</Tr>
											);
										})}
									</Tbody>
								</Table>

								<Pagination
									totalCountOfRegisters={data.totalCount}
									registerPerPage={5}
									currentPage={page}
									onPageChange={setPage}
								/>
							</>
						)}
					</Box>
				</Flex>
			</Box>
		);
	}
}
