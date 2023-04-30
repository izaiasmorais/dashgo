import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email Obrigatório")
		.email("Digite um endereço de email válido"),
	password: yup.string().required('Senha obrigatória'),
});

export default function Home() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(signInFormSchema),
	});

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
						{...register("email")}
					/>

					<Input
						type="password"
						label="Senha"
						error={errors.password}
						{...register("password")}
					/>
				</Stack>
				<Button
					type="submit"
					colorScheme="pink"
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
