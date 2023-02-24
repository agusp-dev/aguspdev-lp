import {
  Stack,
  useTheme
} from '@chakra-ui/react'
import { SectionTitle, ProjectCard } from '~/components/molecules'
import { DATA } from './data'

export const LatestProjectsSection = () => {
  const theme = useTheme()
  return (
    <Stack
      width='full'
      height='full'
      bgColor={theme.color.softGray1}
      padding='4.8rem 1rem'
    >
      <Stack width='full' gap='3rem' alignItems='center'>
        <SectionTitle
          color={theme.color.darkBlueGray}
          withSeparator
        >
          Latest Projects
        </SectionTitle>
        <Stack width='100%' alignItems='center' gap='.8rem'>
          {DATA?.map(({ id, ...props }) => <ProjectCard key={id} id={id} {...props} />)}
        </Stack>
      </Stack>
    </Stack>
  )
}
