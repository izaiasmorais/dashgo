import { Thead, Tr, Th } from "@chakra-ui/react";

export default function TheadComponent() {
  return (
    <Thead>
      <Tr>
        <Th border="none" color="gray.300">
          MATÉRIA
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          B1
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          B2
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          B3
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          B3
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          REC
        </Th>
        <Th border="none" color="gray.300" isNumeric>
          MG
        </Th>
        <Th border="none" color="gray.300">
          STATUS
        </Th>
      </Tr>
    </Thead>
  );
}
