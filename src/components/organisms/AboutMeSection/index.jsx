import {
  Center,
  Container,
  Stack,
  Text,
  useTheme
} from '@chakra-ui/react'
import { SectionTitle } from '~/components/molecules'
import { aboutMeData } from '~/mock'

export const AboutMeSection = () => {
  const theme = useTheme()

  return (
    <Center
      width='full'
      padding='4.2rem 1rem 4rem'
      bg={theme.color.hardBlue}
    >
      <Container maxW='3xl' centerContent>
        <Stack gap='3rem'>
          <SectionTitle
            color={theme.color.white}
            withSeparator
          >
            { aboutMeData?.title }
          </SectionTitle>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={theme.color.white}
            textAlign='center'
          >
            { aboutMeData?.description }
          </Text>
        </Stack>
      </Container>
    </Center>
  )
}
