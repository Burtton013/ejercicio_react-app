import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar.jsx'
import Main from './Components/main/Main.jsx'
import Astros from './Components/astros/Astros.jsx'
import About from "./Components/about/about.jsx"
import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/about'},
        { name: 'Astros', href: '/astros'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route 
                    element={<About />}
                    path='/about'
                />
            </Routes>
        </>
    )
}

export default App
