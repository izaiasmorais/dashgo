import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
					<Heading size="lg" fontWeight="normal">
						Criar usuário
					</Heading>
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input type="name" name="name" label="Nome completo" />
							<Input label="E-mail" name="email" type="email" />
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="password" type="password" label="Senha" />
							<Input
								label="Confirmação de senha"
								name="passwordConfirmation"
								type="password"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack>
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Button type="submit" colorScheme="pink">
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
