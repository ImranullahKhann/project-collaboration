import Dashboard from "./components/Dashboard"
import Auth from "./components/Auth/Auth"
import "./main.css"
import { useState } from "react"

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    return isAuthenticated ? (
        <Dashboard />
    ) : (
        <Auth />
    )
}

export default App