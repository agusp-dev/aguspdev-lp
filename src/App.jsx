import { Stack, Box } from '@chakra-ui/react'
import { MainLayout } from '~/layout'
import {
  HeroSection,
  AboutMeSection,
  MyCareerSection,
  LatestProjectsSection,
  ContactSection,
} from './components'
import { SECTION, SECTION_IDS } from '~/mock'

export const App = () => (
  <MainLayout>
    <Stack spacing={0}>
      <Box id={SECTION_IDS[SECTION.HERO]} as='section'>
        <HeroSection />
      </Box>
      <Box id={SECTION_IDS[SECTION.ABOUT_ME]} as='section'>
        <AboutMeSection />
      </Box>
      <Box id={SECTION_IDS[SECTION.CAREER]} as='section'>
        <MyCareerSection />
      </Box>
      <Box id={SECTION_IDS[SECTION.LATEST_PROJECTS]} as='section'>
        <LatestProjectsSection />
      </Box>
      <Box id={SECTION_IDS[SECTION.CONTACT]} as='section'>
        <ContactSection />
      </Box>
    </Stack>
  </MainLayout>
)
