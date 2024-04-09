import {
  Box,
  Flex,
  Link,
  IconButton,
  Collapse,
  useBreakpointValue,
  useDisclosure,
  useTheme,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import MeImg from '~/assets/me_img.jpeg'
import { ProfileImage } from '~/components/molecules'
import { navData } from '~/mock'

const StyledLink = styled(Link)(
  ({
    isMobileMode,
    clr,
    size,
    weight
  }) => `
    width: ${isMobileMode ? '100%' : 'auto'};
    text-align: ${isMobileMode ? 'center' : 'left'};
    color: ${clr};
    font-size: ${size};
    font-weight: ${weight};
  `
)

const StyledCollapse = styled(Collapse)`
  margin: 0 !important;
  padding: 0 !important;
`

const DesktopMenu = () => {
  const theme = useTheme()
  return (
    <Flex gap='3.2rem'>
      {navData?.map(({ title, href }) => (
        <StyledLink
          key={title}
          href={href ?? '/'}
          clr={theme.color.white}
          size='1rem'
          weight={500}
        >
          { title }
        </StyledLink>
      ))}
    </Flex>
  )
}

const MobileMenu = () => {
  const theme = useTheme()
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack>
      <Flex position='relative' display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant='ghost'
          aria-label='Toggle Navigation'
          _hover={{
            backgroundColor: `${theme.color.mainCyan}33`
          }}
          _active={{
            backgroundColor: `${theme.color.mainCyan}66`
          }}
        />
      </Flex>
      <StyledCollapse in={isOpen} animateOpacity>
        <Stack
          width='full'
          bg={`${theme.color.black}88`}
          p='1rem'
          position='fixed'
          top='4.2rem'
          right={0}
          gap='.9rem'
          alignItems='center'
        >
          {navData?.map(({ title, href }) => (
            <StyledLink
              key={title}
              href={href ?? '/'}
              isMobileMode
              clr={theme.color.white}
              size='1rem'
              weight={500}
              onClick={onToggle}
            >
              { title }
            </StyledLink>
          ))}
        </Stack>
      </StyledCollapse>
    </Stack>
  )
}

const Menu = () => {
  const component = useBreakpointValue({
    base: <MobileMenu />,
    md: <DesktopMenu />
  })
  return component
}

export const Appbar = () => {
  const theme = useTheme()
  return (
    <Box
      position='fixed'
      width='full'
      height='3.6rem'
      bg={`${theme.color.hardBlue}AA`}
      color={theme.color.white}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      paddingX={{ base: '1rem', md: '2rem' }}
      zIndex={999}
    >
      <ProfileImage
        src={MeImg}
        width={{ base: '2.4rem' }}
        borderRadius='50%'
        border={`2px solid ${theme.color.white}`}
      />
      <Menu />
    </Box>
  )
}
