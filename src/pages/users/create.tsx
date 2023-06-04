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
import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";
import { createUserFormSchema } from "../../schemas/createUserFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { queryClient } from "../../services/react-query";
import { useRouter } from "next/router";
import { api } from "../../services/axios";
import { CreateUserFormData } from "../../@types/user";

export default function CreateUser() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const createUser = useMutation(
		async (user: CreateUserFormData) => {
			const response = await api.post("users", {
				user: {
					...user,
					created_at: new Date(),
				},
			});

			return response.data.user;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries("users");
			},
		}
	);

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values
	) => {
		await createUser.mutateAsync(values);

		router.push("/users");
	};

	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
				<Sidebar />

				<Box
					as="form"
					flex="1"
					borderRadius={8}
					bg="gray.800"
					p={["6", "8"]}
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">
						Criar usuário
					</Heading>
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								type="name"
								name="name"
								label="Nome completo"
								{...register("name")}
								error={
									errors === null ? undefined : String(errors.name?.message)
								}
							/>
							<Input
								label="E-mail"
								name="email"
								type="email"
								{...register("email")}
								error={
									errors === null ? undefined : String(errors.email?.message)
								}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								type="password"
								label="Senha"
								{...register("password")}
								error={
									errors === null ? undefined : String(errors.password?.message)
								}
							/>
							<Input
								label="Confirmação de senha"
								name="password_confirmation"
								type="password"
								{...register("password_confirmation")}
								error={
									errors === null
										? undefined
										: String(errors.password_confirmation?.message)
								}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack>
							<Link href="/users" passHref>
								<Button as="a" colorScheme="gray">
									Cancelar
								</Button>
							</Link>
							<Button
								type="submit"
								colorScheme="purple"
								isLoading={isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
