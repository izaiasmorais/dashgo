import { Box, Stack, Icon, Text, Link } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri'

interface Props {
  title: string
  children: ReactNode
}

export function NavSection({ title, children }: Props) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8">
        {children}
      </Stack>
    </Box>
  )
}
