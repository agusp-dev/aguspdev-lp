import { useMemo, } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

export const CURRENT_SCREEN = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP'
}

export const useScreenSize = () => {
  const [mobile] = useMediaQuery('(min-width: 2em)')
  const [tablet] = useMediaQuery('(min-width: 48em)')
  const [desktop] = useMediaQuery('(min-width: 62em)')

  // eslint-disable-next-line consistent-return
  const currentScreen = useMemo(() => {
    if (desktop) return CURRENT_SCREEN.DESKTOP
    if (tablet) return CURRENT_SCREEN.TABLET
    if (mobile) return CURRENT_SCREEN.MOBILE
  }, [mobile, tablet, desktop])

  return currentScreen
}
