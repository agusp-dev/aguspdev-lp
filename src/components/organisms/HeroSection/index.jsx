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
        <Flex
          flexDirection={{ base: 'column', sm: 'row' }}
          gap='1.4rem'
          flexWrap='wrap'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            src={ProfileImage}
            alt='My profile'
            width={{ base: '8.2rem', sm: '9.2rem', md: '12rem' }}
            borderRadius='50%'
            border={`2px solid ${theme.color.white}`}
          />
          <Stack>
            <Heading as='h1' fontSize={{ base: '2.5rem', sm: '3rem', md: '4.2rem' }} textAlign='center'>
              Hi, I&apos;m Agustin!
            </Heading>
            <Text
              fontSize={{ base: '1.2rem', sm: '1.3rem', md: '1.5rem' }}
              color={theme.color.mainCyan}
              textAlign={{ base: 'center', sm: 'left' }}
              mt={{ sm: '0 !important' }}
            >
              Passionate Frontend Engineer
            </Text>
            <Box
              marginTop={{ base: '1.8rem !important', sm: '1.4rem !important' }}
              display={{ base: 'flex', sm: 'block' }}
              justifyContent={{ base: 'center' }}
            >
              <Button
                border='1px'
                // size={{ base: 'sm', sm: 'md' }}
                variant='outline'
                borderColor={theme.color.mainCyan}
                color={theme.color.white}
                fontWeight={400}
                _hover={{
                  backgroundColor: `${theme.color.mainCyan}33`
                }}
                _active={{
                  backgroundColor: `${theme.color.mainCyan}66`
                }}
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
