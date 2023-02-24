import { Stack } from '@chakra-ui/react'
import { MainLayout } from '~/layout'
import {
  HeroSection,
  AboutMeSection,
  MyCareerSection,
  LatestProjectsSection
} from './components'

export const App = () => (
  <MainLayout>
    <Stack spacing={0}>
      <HeroSection />
      <AboutMeSection />
      <MyCareerSection />
      <LatestProjectsSection />
    </Stack>
  </MainLayout>
)
