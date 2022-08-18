import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  color: {
    white: '#fff',
    black: '#000',

    hardBlue: '#233853',
    mainBlue: '#314a74',

    mainCyan: '#6396ef',

    gray: '#888',
    softGray: '#f6f6f6',
  }
}

export const theme = extendTheme(customTheme)
