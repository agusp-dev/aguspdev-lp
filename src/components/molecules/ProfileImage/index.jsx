import PropTypes from 'prop-types'
import { Image } from '@chakra-ui/react'
import ProfileImg from '~/assets/profile_img.jpg'

export const ProfileImage = ({ width, borderRadius, border }) => (
  <Image
    src={ProfileImg}
    alt='My profile'
    width={width}
    borderRadius={borderRadius}
    border={border}
  />
)

ProfileImage.propTypes = {
  width: PropTypes.shape({}).isRequired,
  borderRadius: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired
}
