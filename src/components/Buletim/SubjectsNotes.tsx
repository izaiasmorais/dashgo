import { Tbody, Tr, Td, Text } from "@chakra-ui/react";

interface SubjectsNotesProps {
  subject: string;
  b1: number;
  b2: number;
  b3: number;
  b4: number;
  rec: number;
  mg: number | string;
  status: string;
  color: string;
}

export default function SubjectsNotes({
  subject,
  b1,
  b2,
  b3,
  b4,
  rec,
  mg,
  status,
  color,
}: SubjectsNotesProps) {
  return (
    <Tbody>
      <Tr>
        <Td border="none">{subject}</Td>
        <Td border="none" isNumeric>
          {b1}
        </Td>
        <Td border="none" isNumeric>
          {b2}
        </Td>
        <Td border="none" isNumeric>
          {b3}
        </Td>
        <Td border="none" isNumeric>
          {b4}
        </Td>
        <Td border="none" isNumeric>
          {rec}
        </Td>
        <Td border="none" isNumeric>
          {((b1 + b2 + b3 + b4) / 4).toFixed(1)}
        </Td>
        <Td border="none">
          <Text
            px="3"
            py="1"
            bg={color}
            w="fit-content"
            borderRadius="10"
            fontWeight="500"
            fontSize="12px"
          >
            {status}
          </Text>
        </Td>
      </Tr>
    </Tbody>
  );
}
