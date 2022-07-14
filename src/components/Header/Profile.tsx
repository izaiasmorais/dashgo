import { Flex, Box, Avatar, Text } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: Props) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Izaías Lima</Text>
          <Text color="gray.300" fontSize="small">
            izaiaslima356@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Izaías Lima"
        src="https://avatars.githubusercontent.com/u/53953937?v=4"
      />

      <BiChevronDown size="20" />
    </Flex>
  );
}
