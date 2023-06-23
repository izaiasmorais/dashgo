import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

type SignInFormData = {
	email: string;
	password: string;
};

const signInFormSchema = yup.object().shape({
	email: yup
		.string()
		.required("Email Obrigatório")
		.email("Digite um endereço de email válido"),
	password: yup.string().required("Senha obrigatória"),
});

export default function Home() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		router.push("/dashboard");
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
						{...register("email")}
						error={errors === null ? undefined : String(errors.email?.message)}
					/>

					<Input
						type="password"
						label="Senha"
						{...register("password")}
						error={
							errors === null ? undefined : String(errors.password?.message)
						}
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
