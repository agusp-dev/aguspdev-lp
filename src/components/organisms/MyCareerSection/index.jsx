import {
  Box,
  Stack,
  useTheme
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { SectionTitle, CareerCard } from '~/components/molecules'
import { careerData, CAREER_DATA_KEYS } from '~/mock'
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

const beggininsData = careerData?.content[CAREER_DATA_KEYS.BEGINNINS]
const presentData = careerData?.content[CAREER_DATA_KEYS.PRESENT]
const projectionData = careerData?.content[CAREER_DATA_KEYS.PROJECTION]

export const MyCareerSection = () => {
  const theme = useTheme()
  const screenSize = useScreenSize()

  return (
    <Box
      width='full'
      height='full'
      bgColor={theme.color.hardBlue}
      pt='4.2rem'
    >
      <Stack width='full' gap='3rem' alignItems='center'>
        <SectionTitle
          color={theme.color.white}
          withSeparator
        >
          { careerData?.title }
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
