import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <InputGroup
      ml="6"
      alignSelf="center"
      flex="1"
      color="gray.200"
      bgColor="gray.800"
      borderRadius="full"
      py="4"
      maxWidth={400}
    >
      <Input
        pl="8"
        px="4"
        mr="4"
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <InputRightElement
        mr="4"
        h="100%"
        pointerEvents="none"
        children={<RiSearchLine fontSize="20" color="gray.300" />}
      />
    </InputGroup>
  )
}
