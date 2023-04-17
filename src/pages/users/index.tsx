import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
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
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/react-query";
import { api } from "../../services/axios";
import NextLink from "next/link";

interface User {
	id: string;
	name: string;
	email: string;
	createdAt: string;
}

export default function UserList() {
	const [page, setPage] = useState(1);
	const { data, isLoading, isRefetching, error } = useUsers(page);

	const isWildVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	async function handlePrefetchUser(userId: string) {
		await queryClient.prefetchQuery(
			["user", userId],
			async () => {
				const response = await api.get(`users/${userId}`);

				return response.data;
			},
			{
				staleTime: 1000 * 60 * 10, // 10 min
			}
		);
	}

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

					{isLoading ? (
						<Flex justify="center">
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify="center">
							<Text>Falha ao obter dados do usuário.</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme="whiteAlpha">
								<Thead>
									<Tr>
										<Th px={["0", "4", "6"]} color="gray.300" w="8">
											<Checkbox colorScheme="pink" />
										</Th>
										<Th color="gray.500">Usuário</Th>
										{isWildVersion && (
											<Th color="gray.500">Data de cadastro</Th>
										)}
										<Th w="8"></Th>
									</Tr>
								</Thead>

								<Tbody>
									{data?.users?.map((user: User) => {
										return (
											<Tr key={user.id}>
												<Td px={["0", "4", "6"]}>
													<Checkbox colorScheme="pink" />
												</Td>
												<Td>
													<Box>
														<Link
															color="purple.400"
															onMouseEnter={() => handlePrefetchUser(user.id)}
														>
															<Text fontWeight="bold">{user.name}</Text>
														</Link>
														<Text fontSize="sm" color="gray.300">
															{user.email}
														</Text>
													</Box>
												</Td>
												{isWildVersion && <Td>{user.createdAt}</Td>}
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
										);
									})}
								</Tbody>
							</Table>

							<Pagination
								totalCountOfRegisters={data!.totalCount}
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
