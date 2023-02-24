import {
  Box,
  Flex,
  Stack,
  useTheme
} from '@chakra-ui/react'
import { SectionTitle } from '~/components/molecules'
import { DATA } from './data'

export const ContactSection = () => {
  const theme = useTheme()
  return (
    <Stack
      width='full'
      height='full'
      bgColor={theme.color.hardBlue}
      padding='4.8rem 1rem'
      gap='3rem'
    >
      <SectionTitle
        color={theme.color.white}
        withSeparator
      >
        Contact
      </SectionTitle>
      <Flex gap='1.4rem' justifyContent='center' color={theme.color.white}>
        {DATA?.map((sm) => (
          <Box>{sm.title}</Box>
        ))}
      </Flex>
    </Stack>
  )
}
