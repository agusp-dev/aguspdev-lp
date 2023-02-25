import { Stack, Box } from '@chakra-ui/react'
import { MainLayout } from '~/layout'
import {
  HeroSection,
  AboutMeSection,
  MyCareerSection,
  LatestProjectsSection,
  ContactSection,
  HERO_ID,
  ABOUT_ME_ID,
  MY_CAREER_ID,
  MY_LATEST_PROJECTS_ID,
  CONTACT_ID
} from './components'

export const App = () => (
  <MainLayout>
    <Stack spacing={0}>
      <Box id={HERO_ID} as='section'>
        <HeroSection />
      </Box>
      <Box id={ABOUT_ME_ID} as='section'>
        <AboutMeSection />
      </Box>
      <Box id={MY_CAREER_ID} as='section'>
        <MyCareerSection />
      </Box>
      <Box id={MY_LATEST_PROJECTS_ID} as='section'>
        <LatestProjectsSection />
      </Box>
      <Box id={CONTACT_ID} as='section'>
        <ContactSection />
      </Box>
    </Stack>
  </MainLayout>
)
