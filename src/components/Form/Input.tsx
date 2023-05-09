import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
	InputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props extends InputProps {
	name: string;
	label?: string;
	error?: ReactNode;
}

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, Props> = (
	{ name, label, error = null, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
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
			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputComponent);
