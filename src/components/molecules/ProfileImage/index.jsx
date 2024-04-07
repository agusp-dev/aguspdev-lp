import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/react'
import ProfileImg from '~/assets/profile_img.jpg'

export const ProfileImage = ({
  width,
  height,
  borderRadius,
  border
}) => (
  <Image
    src={ProfileImg}
    alt='My profile'
    width={width ?? 'auto'}
    height={height ?? 'auto'}
    borderRadius={borderRadius}
    border={border}
  />
)

ProfileImage.propTypes = {
  width: PropTypes.shape({}),
  height: PropTypes.shape({}),
  borderRadius: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired
}

ProfileImage.defaultProps = {
  width: null,
  height: null
}
