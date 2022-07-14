import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Class } from "../components/Class";
import { faker } from "@faker-js/faker";

export default function Subjects() {
  const Classes = [
    "Matemática",
    "Português",
    "Química",
    "Física",
    "História",
    "Inglês",
    "Filosofia",
    "Biologia",
    "Sociologia",
    "Educação Física",
    "Espanhol",
  ];

  return (
    <div>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            {Classes.map((item) => {
              return (
                <Class
                  key={item}
                  title={item}
                  teacher={faker.name.findName()}
                />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </div>
  );
}
