import {
  Box,
  Stack,
  useTheme
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { SectionTitle, CareerCard } from '~/components/molecules'
import { DATA, DATA_KEYS } from './data'
import { useScreenSize, CURRENT_SCREEN } from '~/hooks'

const StyledBackgroundBox = styled(Box)(
  ({ theme, isMobileScreen, isTabletScreen }) => `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${!isMobileScreen ? 'row' : 'column'};
    align-items: ${isMobileScreen && 'center'};
    justify-content: center;
    gap: ${isMobileScreen ? '4rem' : '1.4rem'};
    flex-wrap: wrap;
    padding: 0 1rem 2rem;
    background: ${!isMobileScreen && !isTabletScreen ? `linear-gradient(
      to bottom,
      ${theme.color.hardBlue} 0%,
      ${theme.color.hardBlue} 60%, 
      ${theme.color.softGray1} 60%, 
      ${theme.color.softGray1} 100%
    );` : `${theme.color.hardBlue}`}
  `
)

const beggininsData = DATA[DATA_KEYS.BEGINNINS]
const presentData = DATA[DATA_KEYS.PRESENT]
const projectionData = DATA[DATA_KEYS.PROJECTION]

export const MyCareerSection = () => {
  const theme = useTheme()
  const screenSize = useScreenSize()

  return (
    <Box
      width='full'
      height='full'
      bgColor={theme.color.hardBlue}
    >
      <Stack width='full' gap='3rem' alignItems='center'>
        <SectionTitle
          color={theme.color.white}
          withSeparator
        >
          My Career
        </SectionTitle>
        <StyledBackgroundBox
          isMobileScreen={screenSize === CURRENT_SCREEN.MOBILE}
          isTabletScreen={screenSize === CURRENT_SCREEN.TABLET}
        >
          <CareerCard {...beggininsData} />
          <CareerCard isCenterCard {...presentData} />
          <CareerCard {...projectionData} />
        </StyledBackgroundBox>
      </Stack>
    </Box>
  )
}
