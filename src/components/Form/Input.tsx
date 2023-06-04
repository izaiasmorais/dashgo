import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	InputProps,
	Flex,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface Props extends InputProps {
	name: string;
	label?: string;
	error: string | undefined;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
	{ name, error, label, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={error !== undefined && error !== "undefined"}>
			{!!label && (
				<FormLabel id={`label-${name}`} htmlFor={name}>
					{label}
				</FormLabel>
			)}
			<ChakraInput
				ref={ref}
				id={name}
				name={name}
				focusBorderColor="pink.500"
				bgColor="gray.900"
				variant="filled"
				size="lg"
				_hover={{ bgColor: "gray.900" }}
				{...rest}
			/>

			{error !== undefined && error !== "undefined" && (
				<Flex color="red.500" fontWeight={500} fontSize=".875rem" mt=".5rem">
					{error}
				</Flex>
			)}
		</FormControl>
	);
};

export const Input = forwardRef(InputComponent);
