import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

// TABLE
import { Table, TableContainer } from "@chakra-ui/react";
import TheadComponent from "./components/TheadComponent";
import SubjectsNotes from "./components/SubjectsNotes";

export default function Buletim() {
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
            <Box p={["6", "8"]} bgColor="gray.800" borderRadius="8">
              <Text mb="6" fontWeight="bold" fontSize="24px">
                Boletim
              </Text>

              <TableContainer>
                <Table variant="simple">
                  <TheadComponent />

                  <SubjectsNotes
                    subject="PORTUGUÊS"
                    b1={9.5}
                    b2={10.0}
                    b3={7.5}
                    b4={6}
                    rec={8}
                    mg={8.75}
                    color="#2ab654"
                    status="APROVADO"
                  />

                  <SubjectsNotes
                    subject="FÍSICA"
                    b1={7}
                    b2={9.0}
                    b3={9.5}
                    b4={10.0}
                    rec={7.8}
                    mg={"--"}
                    color="#2ab654"
                    status="APROVADO"
                  />

                  <SubjectsNotes
                    subject="HISTÓRIA"
                    b1={7.5}
                    b2={7}
                    b3={6.5}
                    b4={4.8}
                    rec={5}
                    mg={"6"}
                    color="#a92520"
                    status="REPROVADO"
                  />
                </Table>
              </TableContainer>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
