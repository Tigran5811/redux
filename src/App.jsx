import { useEffect } from "react"
import { useSelector } from "react-redux"
import Counter from "../src/containers/CounterContainer"
import Settings from "./containers/SettingsContainer"
import { getTheme } from "./redux/reducers/selectors/theme"

function App() {
  const theme = useSelector(getTheme)

  useEffect(() => {
    if (document.body.className === 'dark') {
      document.body.classList.remove(theme)
    } else {
      document.body.classList.remove(theme)
    }

  }, [theme])

  return (
    <div className="App">
      <Counter />
      <Settings />
    </div>
  )
}

export default App
