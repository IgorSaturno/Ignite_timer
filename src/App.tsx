import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Button } from './components/Button'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button />
    </ThemeProvider>
  )
}

export default App
