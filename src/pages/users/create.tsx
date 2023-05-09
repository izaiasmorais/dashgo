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
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
	name: yup.string().required("Nome Obrigatório"),
	email: yup
		.string()
		.required("Email obrigatório")
		.email("Digite um endereço de email válido"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(6, "No mínimo 6 caracteres"),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(createUserFormSchema),
	});

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values
	) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log();
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
								error={errors.name}
							/>
							<Input
								label="E-mail"
								name="email"
								type="email"
								{...register("email")}
								error={errors.email}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								name="password"
								type="password"
								label="Senha"
								{...register("password")}
								error={errors.password}
							/>
							<Input
								label="Confirmação de senha"
								name="password_confirmation"
								type="password"
								{...register("password_confirmation")}
								error={errors.password_confirmation}
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
