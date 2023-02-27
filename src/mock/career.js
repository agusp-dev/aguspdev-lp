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
      description: `I started my career as a dev,
      developing Native Android (Java)
      and all your environment.`,
      list: [{
        title: 'Technologies',
        items: [
          'Java for Android',
          'Material Design',
          'Kotlin (only 2 projects)',
          'Butterknife',
          'Dagger'
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
      as a Frontend. Makes approx. 3
      years that I am working with JS
      and React.js, along with all its
      environment.`,
      list: [{
        title: 'Technologies',
        items: [
          'Javascript',
          'React.js',
          'Next.js',
          'Flux',
          'Redux (with unks and Szagas)',
          'Hooks',
          'Context Api',
          'Styled Components',
          'Bootstrap',
          'Material UI',
          'Chakra UI',

        ]
      }, {
        title: 'In the near future...',
        items: [
          'Testing - Jest',
          'Typescript',
          'React Native',
          'Another JS and React.js libs'
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
      JS Fullstack Dev, developing with
      the MERN stack, but I don't rule
      out learning others languages and
      technologies like Flutter (Dart) or
      Go, etc.`,
      list: [{
        title: 'Technologies',
        items: [
          'Node.js',
          'Express',
          'Mongo DB',
          'GraphQL',
          'Dart',
          'Flutter'
        ]
      }]
    }
  }
}
