import { Image, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import ImgProfile from '~/assets/img_profile_1.jpg'

const bounce = keyframes`
  from { width: 0 },
  to { width: 100% }
`

const StyledText = styled(Text)(
  ({ theme }) => `
    overflow: hidden;
    border-right: .15rem solid ${theme.color.gray};
    color: ${theme.color.black};
    white-space: nowrap;
    font-size: 1.6rem;
    width: 0;
  `
)

export const MainComponent = () => (
  <Stack spacing='2rem' alignItems='center'>
    <Image
      src={ImgProfile}
      alt='Profile'
      width='10rem'
      borderRadius='full'
    />
    <StyledText animation={`${bounce} 6s forwards infinite`}>
      {'<Coming Soon />'}
    </StyledText>
  </Stack>
)
