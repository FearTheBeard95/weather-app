import { Link } from 'react-router-dom'
const Header = () => (
    <header>
        <h1>Weather App</h1>
        <Link to="/">Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
    </header>
)

export default Header