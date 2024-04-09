import {
  Center, Container, Flex, Stack, Heading, Text, Button, useTheme, Box, Link
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import HeroImage from '~/assets/hero_bg.jpg'
import { FlipProfileImg } from '~/components/molecules'
import { heroData } from '~/mock'

const StyledTransparentLayer = styled.div(
  ({ theme }) => `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 3.6rem);
    background: linear-gradient(
      to top, 
      ${theme.color.hardBlue} 1%, 
      ${theme.color.black}11 35%
    );
    z-index: 800;
  `
)

export const HeroSection = () => {
  const theme = useTheme()
  return (
    <Center
      width='full'
      height='calc(100vh - 3.6rem)'
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
          <FlipProfileImg />
          <Stack zIndex={999}>
            <Heading as='h1' fontSize={{ base: '2.5rem', sm: '3rem', md: '4.2rem' }} textAlign='center'>
              {heroData?.title}
            </Heading>
            <Text
              fontSize={{ base: '1.2rem', sm: '1.3rem', md: '1.5rem' }}
              color={theme.color.mainCyan}
              textAlign={{ base: 'center', sm: 'left' }}
              mt={{ sm: '0 !important' }}
            >
              {heroData?.subTitle}
            </Text>
            <Box
              marginTop={{ base: '1.8rem !important', sm: '1.4rem !important' }}
              display={{ base: 'flex', sm: 'block' }}
              justifyContent={{ base: 'center' }}
            >
              <Button
                width='10rem'
                border='1px'
                variant='outline'
                borderColor={theme.color.mainCyan}
                color={theme.color.white}
                fontWeight={400}
                as={Link}
                textDecoration='none !important'
                href={heroData?.mainCta?.href}
                _hover={{
                  backgroundColor: `${theme.color.mainCyan}33`
                }}
                _active={{
                  backgroundColor: `${theme.color.mainCyan}66`
                }}
              >
                {heroData?.mainCta?.title}
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Container>
      <StyledTransparentLayer />
    </Center>
  )
}
