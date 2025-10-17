// import { createRoot } from 'react-dom/client';
import ReactLogo from '../assets/react.svg';

export default function Navbar() {
  return (
    <header>
        <nav className='navbar'>
        <img className='logo' src={ReactLogo} alt="React logo" />
        <h1 className='header'>ReactFacts</h1>
        </nav>
    </header>
  );
}