import MercaditoPreviewImg from '~/assets/mercadito_preview_img.jpg'
import WomboPreviewImg from '~/assets/wombo_preview_img.jpg'
import PostProcesosPreviewImg from '~/assets/postprocesos_img.jpg'

export const latestProjectsData = {
  title: 'Latest Projects',
  projects: [{
    id: '1',
    title: 'Mercadito Dashboard App',
    previewImg: MercaditoPreviewImg,
    company: 'Mercadito',
    startDate: '02/07/2023',
    endDate: '',
    shortDescription: `Mercadito is a web platform that allows you 
    to manage your inventory and daily cash, in an efficient way. 
    Manage your customers and suppliers checking accounts, bank checks, and banking and cash transactions.`,
    myWork: `I was the architect of this end-to-end software solution. 
    From gathering requirements to putting them into production on a custom vps connected to GitHub Actions.`,
    url: 'http://89.116.186.30/',
    techStack: [
      'Next.js',
      'React.js',
      'Javascript',
      'Atomic Design',
      'Chakra UI',
      'Tanstack Query',
      'Recoil',
      'Next Auth',
      'Mongo DB',
      'BCrypt',
      'CI/CD',
      'Github Actions',
    ],
    githubUrl: '',
  }, {
    id: '2',
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
    techStack: ['Next.js', 'React.js', 'Javascript', 'MUI', 'Emotion', 'Atomic Design', 'DatoCMS', 'Tanstack Query',
      'Zustand'],
    githubUrl: '',
  },
  {
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
