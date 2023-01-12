import React from 'react'
import ReactDOM from 'react-dom/client'
import { Profile } from './pages/Profile'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global';

import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
  
)
