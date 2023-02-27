import {
  Box,
  Stack,
  useTheme
} from '@chakra-ui/react'
import { SectionTitle, ProjectCard } from '~/components/molecules'
import { latestProjectsData } from '~/mock'

export const LatestProjectsSection = () => {
  const theme = useTheme()
  return (
    <Box
      width='full'
      height='full'
      bgColor={theme.color.softGray1}
      padding='5rem 1rem'
    >
      <Stack width='full' gap='3rem' alignItems='center'>
        <SectionTitle
          color={theme.color.darkBlueGray}
          withSeparator
        >
          { latestProjectsData?.title }
        </SectionTitle>
        <Stack width='100%' alignItems='center' gap='.8rem'>
          {latestProjectsData?.projects?.map(({ id, ...props }) => <ProjectCard key={id} id={id} {...props} />)}
        </Stack>
      </Stack>
    </Box>
  )
}
