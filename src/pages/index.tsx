import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
	email: string;
	password: string;
};

export default function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log(values);
	};

	return (
		<Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
			<Flex
				as="form"
				width="100%"
				maxWidth={360}
				bg="gray.800"
				p={8}
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing={4}>
					<Input
						type="email"
						label="Email"
						error={errors.email}
						{...register("email", { required: "Digite um email válido" })}
					/>

					<Input
						type="password"
						label="Senha"
						error={errors.password}
						{...register("password", { required: "Digite uma senha válida" })}
					/>
				</Stack>
				<Button
					type="submit"
					colorScheme="purple"
					size="lg"
					mt={6}
					isLoading={isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
