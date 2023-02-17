import PropTypes from 'prop-types'
import { Box, Heading, Stack } from '@chakra-ui/react'

export const SectionTitle = ({ color, withSeparator = false, children }) => (
  <Stack
    alignItems='center'
    gap={{ base: withSeparator && '1.1rem', md: withSeparator && '1.4rem' }}
  >
    <Heading
      as='h2'
      size='xl'
      color={color}
    >
      { children }
    </Heading>
    {withSeparator && (
      <Box w='3.2rem' h='.4rem' bgColor={color} borderRadius='1rem' />
    )}
  </Stack>
)

SectionTitle.propTypes = {
  color: PropTypes.string.isRequired,
  withSeparator: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
