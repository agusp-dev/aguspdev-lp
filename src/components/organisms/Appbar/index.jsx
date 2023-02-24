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
import { ProfileImage } from '~/components/molecules'

const StyledLink = styled(Link)(
  ({ clr, size, weight }) => `
    color: ${clr};
    font-size: ${size};
    font-weight: ${weight};
  `
)

const StyledCollapse = styled(Collapse)`
  margin: 0 !important;
  padding: 0 !important;
`

const NAV_ITEMS = [
  { key: 'about', title: 'ABOUT', href: '#about' },
  { key: 'mycareer', title: 'MY CAREER', href: '#mycareer' },
  { key: 'projects', title: 'PROJECTS', href: '#projects' },
  { key: 'contact', title: 'CONTACT', href: '#contact' }
]

const DesktopMenu = () => {
  const theme = useTheme()
  return (
    <Flex gap='3.2rem'>
      {NAV_ITEMS?.map(({ key, title, href }) => (
        <StyledLink
          key={key}
          href={href}
          clr={theme.color.mainCyan}
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
          bg={`${theme.color.black}44`}
          p='1rem'
          position='fixed'
          top='4.2rem'
          right={0}
          gap='.9rem'
          alignItems='center'
        >
          {NAV_ITEMS?.map(({ key, title, href }) => (
            <StyledLink
              key={key}
              href={href}
              clr={theme.color.mainCyan}
              size='1rem'
              weight={500}
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
      height='4.8rem'
      bg={`${theme.color.black}44`}
      color='white'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      paddingX={{ base: '1rem', md: '2rem' }}
      zIndex={999}
    >
      <ProfileImage
        width={{ base: '2.4rem' }}
        borderRadius='50%'
        border={`2px solid ${theme.color.white}`}
      />
      <Menu />
    </Box>
  )
}
