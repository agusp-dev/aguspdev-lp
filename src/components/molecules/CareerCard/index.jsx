import PropTypes from 'prop-types'
import {
  Heading,
  Text,
  Stack,
  Image,
  List,
  ListItem,
  ListIcon,
  useTheme
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import { useScreenSize, CURRENT_SCREEN } from '~/hooks'

const StyledCard = styled(Stack)(
  ({ theme }) => `
    width: 19.8rem;
    gap: 1.3rem;
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
          <Heading as='h4' fontSize='1.8rem' color={theme.color.mainCyan} textAlign='center'>
            { title }
          </Heading>
        )}
        {description && (
          <Text fontSize='1rem' fontWeight={300} color={theme.color.darkGray} lineHeight='1.4rem' textAlign='center'>
            { description }
          </Text>
        )}
        {list?.map(({ title: listTitle, items }) => (
          <Stack gap='.6rem' mt='1rem !important'>
            <Heading as='h6' fontSize='.9rem' fontWeight={600} color={theme.color.mainBlue}>
              { listTitle }
            </Heading>
            <List spacing={2}>
              {items?.map((item) => (
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={theme.color.mainBlue} />
                  { item }
                </ListItem>
              ))}
            </List>
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
