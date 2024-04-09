import AndroidImg from '~/assets/android_img.svg'
import ReactImg from '~/assets/react_img.svg'
import MernImg from '~/assets/mern_img.svg'

export const CAREER_DATA_KEYS = {
  BEGINNINS: 'BEGINNINS',
  PRESENT: 'PRESENT',
  PROJECTION: 'PROJECTION'
}

export const careerData = {
  title: 'My Career',
  content: {
    [CAREER_DATA_KEYS.BEGINNINS]: {
      image: {
        src: AndroidImg,
        alt: 'Android',
        height: '6rem',
      },
      title: 'Beginnins',
      description: `I started my career as a mobile dev,
      creating Native Android apps with Java.`,
      list: [{
        title: 'Technologies',
        items: [
          'Java for Android',
          'Material Design',
          'Kotlin (only 1 projects)',
          'Butterknife',
          'Dagger',
          'Google Play deployment'
        ]
      }, {
        title: 'Design Patters',
        items: [
          'MVP',
          'MVVM',
          'Clean Architecture'
        ]
      }]
    },
    [CAREER_DATA_KEYS.PRESENT]: {
      image: {
        src: ReactImg,
        alt: 'React',
        height: '6rem',
      },
      title: 'Present',
      description: `I am currently focused on develop
      as a Frontend. Makes approx. 5
      years that I am working with JS
      and React.js and 3 with Next.js Framework, along with all its
      environment.`,
      list: [{
        title: 'Technologies',
        items: [
          'Javascript',
          'React.js',
          'Next.js',
          'Mongo DB / Mongoose',
          'Tanstack Query',
          'MUI - Chakra UI - Tailwind - Styled Components / Emotion',
          'Github Actions',
        ]
      }, {
        title: 'I am training and gaining backend skills...',
        items: [
          'Testing',
          'Node.js',
          'Express',
          'Nest',
          'SQL',
          'PostgreSQL'
        ]
      }]
    },
    [CAREER_DATA_KEYS.PROJECTION]: {
      image: {
        src: MernImg,
        alt: 'Mern',
        height: '4rem',
      },
      title: 'Projection',
      description: `In the near future, I plan to specialize in Backend technologies, TypeScript and React Native, 
      while also expanding my knowledge in CI/CD practices.`,
      list: [{
        title: 'Technologies',
        items: [
          'Backend',
          'React Native',
          'Typescript',
          'GraphQL',
          'AWS',
          'CI/CD',
        ]
      }]
    }
  }
}
