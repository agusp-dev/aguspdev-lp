import styled from '@emotion/styled'
import ProfileImg from '~/assets/profile_img.jpg'
import MeImg from '~/assets/me_img.jpeg'
import { ProfileImage } from '../ProfileImage'
import { useScreenSize, CURRENT_SCREEN } from '~/hooks'

const StyledContainer = styled('div')(
  ({ width }) => `
  z-index: 999;
  width: ${width};
  height: ${width};
  perspective: 1000px;
  `
)

const StyledFlipCard = styled('div')`
  z-index: 999;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform .8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`

const StyledFrontCard = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const StyledBackCard = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const IMG_WIDTH = {
  [CURRENT_SCREEN.DESKTOP]: '12rem',
  [CURRENT_SCREEN.TABLET]: '9.2rem',
  [CURRENT_SCREEN.MOBILE]: '8.2rem',
}

export const FlipProfileImg = () => {
  const currentSize = useScreenSize()
  return (
    <StyledContainer width={IMG_WIDTH[currentSize]}>
      <StyledFlipCard>
        <StyledFrontCard>
          <ProfileImage
            src={ProfileImg}
            width={{ base: '8.2rem', sm: '9.2rem', md: '12rem' }}
            borderRadius='50%'
            border='2px solid #ffffff'
          />
        </StyledFrontCard>
        <StyledBackCard>
          <ProfileImage
            src={MeImg}
            width={{ base: '8.2rem', sm: '9.2rem', md: '12rem' }}
            borderRadius='50%'
            border='2px solid #ffffff'
          />
        </StyledBackCard>
      </StyledFlipCard>
    </StyledContainer>
  )
}
