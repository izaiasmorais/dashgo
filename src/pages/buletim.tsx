import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

// TABLE
import { Table, TableContainer } from "@chakra-ui/react";
import TheadComponent from "../components/Buletim/TheadComponent";
import SubjectsNotes from "../components/Buletim/SubjectsNotes";

import { notes } from "../services/notes/notes";

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
            maxWidth={1144}
          >
            <Box p={["6", "8"]} bgColor="gray.800" borderRadius="8">
              <Text mb="6" fontWeight="500" fontSize="24px">
                Boletim
              </Text>

              <TableContainer>
                <Table variant="simple">
                  <TheadComponent />

                  {notes.map((note) => {
                    return (
                      <SubjectsNotes
                        key={note.subject}
                        subject={note.subject}
                        b1={note.b1}
                        b2={note.b2}
                        b3={note.b3}
                        b4={note.b4}
                        rec={note.rec}
                      />
                    );
                  })}
                </Table>
              </TableContainer>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
