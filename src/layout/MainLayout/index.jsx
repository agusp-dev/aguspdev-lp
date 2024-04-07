import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Appbar } from '~/components'

export const MainLayout = ({ children }) => (
  <Box width='full' height='full'>
    <Appbar />
    { children }
  </Box>
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
