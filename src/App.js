import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Main from "./components/Main"
import store from "./redux/Store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main></Main>
      </Router>
    </Provider>
  )
}

export default App
