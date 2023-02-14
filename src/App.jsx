import { Stack } from '@chakra-ui/react'
import { MainLayout } from '~/layout'
import { HeroSection } from './components'

export const App = () => (
  <MainLayout>
    <Stack>
      <HeroSection />
    </Stack>
  </MainLayout>
)
