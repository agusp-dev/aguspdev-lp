import { useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
  Link,
  useTheme,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ProfileImage } from '../ProfileImage'
import { useScreenSize, CURRENT_SCREEN } from '~/hooks'

const StyledCard = styled(Box)(
  ({ theme, isMobileScreen }) => `
    width: 100%;
    max-width: ${isMobileScreen ? '32rem' : '72rem'};
    display: flex;
    flex-direction: ${!isMobileScreen ? 'row' : 'column'};
    align-items: ${isMobileScreen && 'center'};
    gap: 1.4rem;
    background-color: ${theme.color.white};
    border-radius: .4rem;
    padding: 1.6rem 1.6rem 1.2rem;
    border: 1px solid ${theme.color.white};
    box-shadow: ${theme.color.gray}88 0 .5rem 1.5rem;
  `
)

const StyledMyWorkCard = styled(Flex)(
  ({ theme }) => `
    width: 100%;
    gap: 1rem;
    margin-top: 1rem !important;
    background-color: ${theme.color.softGray1};
    border-radius: .4rem;
    padding: 1rem;
  `
)

const StyledTechChip = styled(Flex)(
  ({ theme }) => `
    padding: .1rem .3rem;
    background-color: ${theme.color.mainCyan}EE;
    border-radius: .4rem;
    color: ${theme.color.white};
    font-size: .8rem;
    font-weight: 300;
  `
)

export const ProjectCard = ({
  // id,
  title,
  previewImg,
  // company,
  // startDate,
  // endDate,
  shortDescription,
  myWork,
  url,
  techStack,
  // githubUrl,
}) => {
  const theme = useTheme()
  const screenSize = useScreenSize()
  const isMobileScreen = useMemo(() => screenSize === CURRENT_SCREEN.MOBILE, [screenSize])
  return (
    <StyledCard isMobileScreen={isMobileScreen}>
      <Image
        src={previewImg}
        alt={title}
        width={isMobileScreen ? '100%' : 400}
        height={isMobileScreen ? '100%' : 260}
        borderRadius='.4rem'
      />
      <Stack flexGrow={1}>
        <Heading
          as={Link}
          href={url ?? '/'}
          target='_blank'
          fontSize='1.4rem'
          fontWeight={600}
          color={theme.color.mainBlue}
        >
          { title }
        </Heading>
        {shortDescription && (
          <Text
            noOfLines={3}
            fontSize='.9rem'
            fontWeight={300}
          >
            { shortDescription }
          </Text>
        )}
        {myWork && (
          <StyledMyWorkCard>
            <ProfileImage
              width={{ base: '2rem' }}
              height={{ base: '2rem' }}
              borderRadius='50%'
              border={`1px solid ${theme.color.white}`}
            />
            <Text
              as='cite'
              fontSize='1rem'
              noOfLines={3}
              fontWeight={300}
              color={theme.color.hardBlue}
            >
              { myWork }
            </Text>
          </StyledMyWorkCard>
        )}
        {techStack?.length && (
          <Flex mt='.8rem !important' gap='.4rem' flexWrap='wrap'>
            {techStack?.map((tech) => (
              <StyledTechChip key={tech}>{ tech }</StyledTechChip>
            ))}
          </Flex>
        )}
      </Stack>
    </StyledCard>
  )
}

ProjectCard.propTypes = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImg: PropTypes.string,
  // company: PropTypes.string,
  // startDate: PropTypes.string.isRequired,
  // endDate: PropTypes.string,
  shortDescription: PropTypes.string.isRequired,
  myWork: PropTypes.string.isRequired,
  url: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.shape({})),
  // githubUrl: PropTypes.string,
}

ProjectCard.defaultProps = {
  previewImg: null,
  // company: null,
  // endDate: null,
  url: null,
  techStack: null,
  // githubUrl: null
}
