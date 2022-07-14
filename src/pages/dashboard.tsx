import {
  Box,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  theme,
} from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Flex direction="column" w="100%">
          <SimpleGrid
            gap="4"
            mb="6"
            minChildWidth={320}
            alignContent="flex-start"
            gridColumn="2fr 1fr"
          >
            <Grid templateColumns={["1fr", "1fr", "2fr 1fr"]} gap={4}>
              <Box p={["6", "8"]} bgColor="gray.700" borderRadius="8">
                <Text mb="6" fontWeight="bold">
                  Welcome Back
                </Text>
                <Button colorScheme="purple">Go Now</Button>
              </Box>

              <Box p={["6", "8"]} bgColor="gray.700" borderRadius="8">
                <Text fontWeight="bold">Taxa de abertura</Text>
              </Box>
            </Grid>
          </SimpleGrid>

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth={320}
            alignContent="flex-start"
            gridColumn="2fr 1fr"
          >
            <Box p={["6", "8"]} bgColor="gray.700" borderRadius="8">
              <Text fontWeight="bold">Média geral do aluno</Text>
            </Box>
            <Box p={["6", "8"]} bgColor="gray.700" borderRadius="8">
              <Text fontWeight="bold">Estatísticas das tarefas</Text>
            </Box>
            <Box p={["6", "8"]} bgColor="gray.700" borderRadius="8">
              <Text fontWeight="bold">Atividades complementares</Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
