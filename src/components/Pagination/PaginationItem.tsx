import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
	number: number;
	isCurrent?: boolean;
	onPageChange: (page: number) => void;
}

export function PaginationItem({
	isCurrent = false,
	onPageChange,
	number,
}: PaginationItemProps) {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				w="4"
				bg="pink.400"
				_hover={{
					bg: "pink.300",
				}}
				disabled
				_disabled={{
					bg: "pink.500",
					cursor: "dafault",
				}}
			>
				{number}
			</Button>
		);
	}

	return (
		<Button
			size="sm"
			fontSize="xs"
			w="4"
			bg="gray.700"
			_hover={{
				bg: "gray.500",
			}}
			onClick={() => onPageChange(number)}
		>
			{number}
		</Button>
	);
}
