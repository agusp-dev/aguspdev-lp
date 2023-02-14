import {
  Center, Container, Flex, Image, Stack, Heading, Text, Button, useTheme, Box
} from '@chakra-ui/react'
import HeroImage from '~/assets/hero_bg.svg'
import ProfileImage from '~/assets/profile_img.jpg'

export const HeroSection = () => {
  const theme = useTheme()
  return (
    <Center
      width='full'
      height='100vh'
      backgroundImage={HeroImage}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      color={theme.color.white}
    >
      <Container maxW='3xl' centerContent>
        <Flex gap='1.4rem' flexWrap='wrap' alignItems='center' justifyContent='center'>
          <Image
            src={ProfileImage}
            alt='My profile'
            width='12rem'
            height='12rem'
            borderRadius='50%'
            border={`2px solid ${theme.color.white}`}
          />
          <Stack>
            <Heading as='h1' size='3xl' textAlign='center'>
              Hi, I&apos;m Agustin!
            </Heading>
            <Text
              fontSize='xl'
              color={theme.color.mainCyan}
            >
              Passionate Fullstack Engineer
            </Text>
            <Box marginTop='1.2rem !important'>
              <Button
                border='1px'
                borderColor={theme.color.mainCyan}
                variant='outline'
                size='sm'
              >
                Read More
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Center>
  )
}
