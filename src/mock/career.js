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
      creative Native Android apps with Java.`,
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
          'SSR',
          'Flux',
          'Redux (with thunks and Szagas)',
          'Hooks',
          'Context Api',
          'Styled Components and Emotion',
          'Css Frameworks: MUI - Chakra UI - Tailwind'
        ]
      }, {
        title: 'In the near future...',
        items: [
          'Testing - Jest',
          'Cypress',
          'Typescript',
          'React Native',
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
      description: `In the near future I see myself as
      JS Fullstack Dev, creating some great apps with MERN stack,
      but I don't rule out learning others languages and
      technologies like Flutter with Dart.`,
      list: [{
        title: 'Technologies',
        items: [
          'Node.js',
          'Express',
          'Mongo DB',
          'GraphQL',
          'SQL',
          'Dart',
          'Flutter'
        ]
      }]
    }
  }
}
