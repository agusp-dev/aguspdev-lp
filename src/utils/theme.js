import { extendTheme } from '@chakra-ui/react'

/**
 * const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
 */

const customTheme = {
  color: {
    white: '#ffffff',
    black: '#000000',

    hardBlue: '#233853',
    mainBlue: '#314a74',

    mainCyan: '#6396ef',

    darkBlueGray: '#1A2129',

    gray: '#888888',
    softGray: '#f6f6f6',
    softGray1: '#f3f3f3',
  }
}

export const theme = extendTheme(customTheme)
