import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <Router basename="/5.tugas5">
      <AppRoutes />
    </Router>
  )
}

export default App
