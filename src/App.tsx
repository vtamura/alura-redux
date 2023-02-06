import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Router } from './routes/router'

function App() {
    return (
        <div className="h-screen flex flex-col">
            <Router />
        </div>
    )
}

export default App
