import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import './styles/global.css';
import banner from './images/photo-banner.svg';

export function App() {

  const links = [
    { name: 'About me', url: './' },
    { name: 'My skills', url: '/my-skills' },
    { name: 'My projects', url: '/my-projects' },
    { name: 'Contact me', url: '/contact' },
  ];

  return (
    <div className="w-screen h-screen bg-black-800">
      <Navbar links={links} />
      <Banner image={banner} title={'Heloise Bonato'} subtitle={'frontend developer'} />
    </div>
  )
}

export default App
