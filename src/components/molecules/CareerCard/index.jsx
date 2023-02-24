import PropTypes from 'prop-types'
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useTheme
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useScreenSize, CURRENT_SCREEN } from '~/hooks'

const StyledCard = styled(Box)(
  ({ theme }) => `
    width: 18rem;
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.white};
    padding: 3.2rem 1.4rem;
    border-radius: .4rem;
    box-shadow: ${theme.color.gray}44 0 .5rem 1.5rem;
  `
)

export const CareerCard = ({
  image,
  title,
  description,
  list,
  isCenterCard
}) => {
  const theme = useTheme()
  const screenSize = useScreenSize()

  return (
    <Stack
      gap='1.4rem'
      marginTop={isCenterCard || screenSize === CURRENT_SCREEN.MOBILE ? 0 : '7.2rem'}
    >
      {image && (
      <Image
        src={image?.src}
        alt={image?.alt}
        height={image?.height}
      />
      )}
      <StyledCard>
        {title && (
          <Heading as='h4' fontSize='1.6rem' color={theme.color.mainCyan} textAlign='center'>
            { title }
          </Heading>
        )}
        {description && (
          <Text fontSize='1rem' fontWeight={300}>
            { description }
          </Text>
        )}
        {list?.map(({ title: listTitle, items }) => (
          <Stack gap='.6rem'>
            <Heading as='h6' fontSize='.9rem' fontWeight={600}>
              { listTitle }
            </Heading>
            <Stack>
              {items?.map((item) => (
                <Text fontSize='.9rem' fontWeight={300}>{ item }</Text>
              ))}
            </Stack>
          </Stack>
        ))}
      </StyledCard>
    </Stack>
  )
}

CareerCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isCenterCard: PropTypes.bool.isRequired
}

CareerCard.defaultProps = {
  image: null
}
