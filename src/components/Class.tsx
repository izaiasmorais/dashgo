import { Box, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface ClassProps {
  title: string;
  teacher: string;
  icon?: ElementType;
}

export function Class({ title, teacher }: ClassProps) {
  return (
    <Box
      p={["6", "8"]}
      bg="gray.800"
      borderRadius={8}
      pb="4"
      _hover={{ bg: "gray.700" }}
    >
      <Text as="a" fontSize="lg" mb="4">
        {title}
      </Text>
      <Text color="gray.300" fontSize="sm" mt="1">
        {teacher}
      </Text>
    </Box>
  );
}
