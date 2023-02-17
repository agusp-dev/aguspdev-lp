import {
  Center,
  Container,
  Stack,
  Text,
  useTheme
} from '@chakra-ui/react'
import { SectionTitle } from '~/components/molecules'

const aboutMeText = `I like to describe myself as a professional programmer who is always looking 
to achieve his goals. I’ve more than 7 years of experience developing Native Mobile and Web applications.
I’m a tireless student of the new technologies that are coming to market.`

export const AboutMeSection = () => {
  const theme = useTheme()

  return (
    <Center
      width='full'
      px='1rem'
      pb={{ base: '4rem', md: '6.8rem' }}
      bg={theme.color.hardBlue}
    >
      <Container maxW='3xl' centerContent>
        <Stack gap='3rem'>
          <SectionTitle
            color={theme.color.white}
            withSeparator
          >
            About Me
          </SectionTitle>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color={theme.color.white}
            textAlign='center'
          >
            { aboutMeText }
          </Text>
        </Stack>
      </Container>
    </Center>
  )
}
