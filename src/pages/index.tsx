import { Button, Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Input } from "../components/Form/Input";

export default function Home() {
	const router = useRouter();

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
				onSubmit={() => router.push("/dashboard")}
			>
				<Stack spacing={4}>
					<Input name="email" type="email" label="Email" />
					<Input name="password" type="password" label="Senha" />
				</Stack>
				<Button type="submit" mt={6} colorScheme="pink" size="lg">
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
