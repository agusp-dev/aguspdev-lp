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

const StyledCard = styled(Box)(
  ({ theme }) => `
    width: 100%;
    max-width: 72rem;
    display: flex;
    gap: 1.4rem;
    background-color: ${theme.color.white};
    border-radius: .4rem;
    padding: 1.6rem 1.6rem 1.2rem;
    border: 1px solid ${theme.color.white};
    box-shadow: ${theme.color.gray}44 0 .5rem 1.5rem;
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
    background-color: ${theme.color.mainCyan}22;
    border-radius: .4rem;
    color: ${theme.color.hardBlue};
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
  return (
    <StyledCard>
      <Image
        src={previewImg}
        alt={title}
        width={400}
        height={260}
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
            noOfLines={2}
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
              fontWeight={300}
              color={theme.color.hardBlue}
            >
              { myWork }
            </Text>
          </StyledMyWorkCard>
        )}
        {techStack?.length && (
          <Flex gap='.4rem' mt='.8rem !important'>
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
