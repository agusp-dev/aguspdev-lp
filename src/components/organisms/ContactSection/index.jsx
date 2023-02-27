import PropTypes from 'prop-types'
import {
  Flex,
  Stack,
  Icon,
  Text,
  Center,
  Link,
  useTheme,
} from '@chakra-ui/react'
import { SectionTitle } from '~/components/molecules'
import { contactData } from '~/mock'

const SocialMediaBox = ({
  title,
  href,
  icon,
}) => {
  const theme = useTheme()
  return (
    <Stack alignItems='center' gap='.2rem'>
      <Center
        width='3.2rem'
        height='3.2rem'
        borderRadius='50%'
        border={`2px solid ${theme.color.mainCyan}`}
        color={theme.color.white}
        transition='all .1s ease-in-out'
        as={Link}
        href={href ?? '/'}
        target='_blank'
        _hover={{
          cursor: 'pointer',
          backgroundColor: theme.color.white,
          border: `2px solid ${theme.color.white}`,
          color: theme.color.mainCyan,
          transform: 'scale(1.1)'
        }}
      >
        <Icon as={icon} boxSize='1.4rem' />
      </Center>
      <Text
        fontSize='.9rem'
        color={theme.color.white}
      >
        { title }
      </Text>
    </Stack>
  )
}

export const ContactSection = () => {
  const theme = useTheme()
  return (
    <Stack
      width='full'
      height='full'
      alignItems='center'
      bgColor={theme.color.hardBlue}
      padding='4.8rem 1rem'
      gap='3rem'
    >
      <SectionTitle
        color={theme.color.white}
        withSeparator
      >
        { contactData?.title }
      </SectionTitle>
      <Flex maxWidth={{ base: '20rem', sm: 'full' }} px='2rem' gap='1.4rem' justifyContent='center' flexWrap='wrap'>
        {contactData?.socialMedias?.map(({ id, ...props }) => (
          <SocialMediaBox
            key={id}
            {...props}
          />
        ))}
      </Flex>
    </Stack>
  )
}

SocialMediaBox.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
