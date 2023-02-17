import { Stack } from '@chakra-ui/react'
import { MainLayout } from '~/layout'
import { HeroSection, AboutMeSection } from './components'

export const App = () => (
  <MainLayout>
    <Stack spacing={0}>
      <HeroSection />
      <AboutMeSection />
    </Stack>
  </MainLayout>
)
