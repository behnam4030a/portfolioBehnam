import { Grid, ThemeProvider } from '@mui/material'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { theme } from '../ui/theme'


const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins : [prefixer,stylisRTLPlugin]
})

const MainLayout = ({children}) => {
    return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
            <Helmet>
                <title>وب سایت شخصی بهنام بیجاری</title>
            </Helmet>
            <Grid container sx={{height:"100dvh", overflow:"hidden"}}>
                {children}
            </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
    )
}
export default MainLayout;