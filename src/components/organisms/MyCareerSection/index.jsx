import {
  Box,
  Stack,
  useTheme
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { SectionTitle, CareerCard } from '~/components/molecules'
import { DATA, DATA_KEYS } from './data'

const StyledBackgroundBox = styled(Box)(
  ({ theme }) => `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    flex-wrap: wrap;
    padding: 0 1rem;
    background: linear-gradient(
      to bottom,
      ${theme.color.hardBlue} 0%,
      ${theme.color.hardBlue} 50%, 
      ${theme.color.softGray} 50%, 
      ${theme.color.softGray} 100%
    );
  `
)

const beggininsData = DATA[DATA_KEYS.BEGINNINS]
const presentData = DATA[DATA_KEYS.PRESENT]
const projectionData = DATA[DATA_KEYS.PROJECTION]

export const MyCareerSection = () => {
  const theme = useTheme()

  return (
    <Stack
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
        <StyledBackgroundBox>
          <CareerCard {...beggininsData} />
          <CareerCard isCenterCard {...presentData} />
          <CareerCard {...projectionData} />
        </StyledBackgroundBox>
      </Stack>
    </Stack>
  )
}
