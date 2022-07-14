import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      // Mobile => 2xl = 42rem, Tablet e Desktop => 3xl = 48rem
      fontSize={["1xl", "2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"     
    >
      Q Acadêmico
      <Text color="pink.500" as="span" ml="1">
        .
      </Text>
    </Text>
  );
}
