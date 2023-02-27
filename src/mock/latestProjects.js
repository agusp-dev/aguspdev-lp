import WomboPreviewImg from '~/assets/wombo_preview_img.png'
import AguspdevPreviewImg from '~/assets/aguspdev_preview_img.png'
import PostProcesosPreviewImg from '~/assets/postprocesos_img.png'

export const latestProjectsData = {
  title: 'Latest Projects',
  projects: [{
    id: '1',
    title: 'Wombo Dashboard App',
    previewImg: WomboPreviewImg,
    company: 'Wombo',
    startDate: '17/02/2021',
    endDate: '',
    shortDescription: `Wombo is a platform for the creation and management of gamer tournaments. 
      It allows users to share their victories through public profiles.`,
    myWork: `I collaborated with the frontend development of the app with next.js 
      (React) and MUI + Emotion.sh for styling.`,
    url: 'https://www.wombo.gg',
    techStack: ['Next.js', 'React.js', 'Javascript', 'MUI', 'Emotion', 'Atomic Design', 'DatoCMS'],
    githubUrl: '',
  }, {
    id: '2',
    title: 'Agusp-dev Landing Page',
    previewImg: AguspdevPreviewImg,
    company: 'Agusp-dev',
    startDate: '24/08/2022',
    endDate: '12/02/2023',
    shortDescription: 'Custom landing page',
    myWork: 'Completely build the site with Vite.js. To use chakra-ui with Emotion for styling.',
    url: 'https://www.agusp.dev',
    techStack: ['Vite.js', 'React.js', 'Javascript', 'Chakra UI', 'Emotion', 'Atomic Design'],
    githubUrl: '',
  }, {
    id: '3',
    title: 'Postprocesos Landing Page',
    previewImg: PostProcesosPreviewImg,
    company: 'Postprocesos',
    startDate: '19/02/2022',
    endDate: '03/04/2022',
    shortDescription: 'Postprocesos landing page',
    myWork: 'I collaborated on the project defining the technologies and styling to integrate.',
    url: 'http://postprocesos.com/',
    techStack: ['React.js', 'Javascript', 'Chakra UI', 'Emotion', 'Atomic Design'],
    githubUrl: '',
  }]
}
