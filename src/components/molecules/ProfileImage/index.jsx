import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/react'

export const ProfileImage = ({
  src,
  width,
  height,
  borderRadius,
  border
}) => (
  <Image
    src={src}
    alt='My profile'
    width={width ?? 'auto'}
    height={height ?? 'auto'}
    borderRadius={borderRadius}
    border={border}
  />
)

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.shape({}),
  height: PropTypes.shape({}),
  borderRadius: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired
}

ProfileImage.defaultProps = {
  width: null,
  height: null
}
