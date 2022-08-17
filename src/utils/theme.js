import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  color: {
    white: '#fff',
    black: '#000',
  }
}

export const theme = extendTheme(customTheme)
