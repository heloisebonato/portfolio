import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import './styles/global.css';
import banner from './images/photo-banner.svg';
import detail from './images/decor.svg';
import { Heading } from './components/Heading/Heading';
import { Text } from './components/Text/Text';
import { CaretDoubleDown } from 'phosphor-react';
import Box from './components/Box/Box';


export function App() {

  const links = [
    { name: 'About me', url: '#about-me' },
    { name: 'My skills', url: '#my-skills' },
    { name: 'My projects', url: '#my-projects' },
    { name: 'Contact me', url: '#contact' },
  ];

  return (
    <div className="w-full h-full bg-black-800">
      <Navbar links={links} />
      <Banner image={banner} title={'Heloise Bonato'} subtitle={'Frontend developer'} >
        <a className="absolute inset-x-0 flex justify-center bottom-10" href="#about-me"> <CaretDoubleDown color='#9e9e9e' weight='bold' size={32} /> </a>
      </Banner>
      {/* About Me */}
      <div id="about-me" className='max-w-7xl mx-auto h-screen scroll-smooth w-full flex flex-col justify-center'>
        <Heading className="text-white-800">
          About <span className="text-limon font-milkipa"> me </span>
          <img src={detail} alt="detail" style={{ display: "inline-block" }} />
        </Heading>
        <Text className="text-xl font-black mt-4"> Hey, I am Heloise 👋 </Text>
        <Text className="font-medium"> I am 22 years old and I live in Brazil. I have a bachelor's degree in Information Systems from PUCPR. </Text>
        <Text className="font-medium"> I have been a frontend developer for about 3 years and I have worked with institutional websites, blogs, lading pages and web systems. </Text>
      </div>
      {/* My Skills */}
      <div id="my-skills" className='max-w-7xl mx-auto h-screen scroll-smooth flex flex-col justify-center'>
        <Heading className="text-white-800">
          My <span className="text-limon font-milkipa"> skills </span>
          <img src={detail} alt="detail" style={{ display: "inline-block" }} />
        </Heading>
        <Box data={[
          { image: "src/images/html.svg", alt: "html", text: "HTML" },
          { image: "src/images/css.svg", alt: "css", text: "CSS" },
          { image: "src/images/js.svg", alt: "javascript", text: "Javascript" },
          { image: "src/images/react.svg", alt: "react", text: "React.js" },
          { image: "src/images/git.svg", alt: "git", text: "Git" },
          { image: "src/images/sass.svg", alt: "sass", text: "Sass" },
          { image: "src/images/ts.svg", alt: "typescript", text: "Typescript" },
          { image: "src/images/sb.svg", alt: "storybook", text: "Storybook" },
          { image: "src/images/wp.svg", alt: "wordpress", text: "Wordpress" },
          { image: "src/images/mysql.svg", alt: "mysql", text: "MySQL" }

        ]} />
      </div>
      {/* My Projects */}
      <div id="my-projects" className='max-w-7xl mx-auto h-screen scroll-smooth flex flex-col justify-center'>
        <Heading className="text-white-800">
          My <span className="text-limon font-milkipa"> projects </span>
          <img src={detail} alt="detail" style={{ display: "inline-block" }} />
        </Heading>
      </div>
      {/* Contact Me */}
      <div id="contact" className='max-w-7xl mx-auto h-auto pb-10 scroll-smooth flex justify-end items-center'>
        <a className="px-4" href="https://www.linkedin.com/in/heloise-bonato/">
          <img className="w-10 h-10" src="src/images/linkedin-green.svg" alt="logo linkedin" />
        </a>
        <a className="px-4" href="">
          <img className="w-10 h-10" src="src/images/gmail.svg" alt="logo gmail" />
        </a>
        <a className="px-4" href="https://github.com/heloisebonato">
          <img className="w-10" src="src/images/github-green.svg" alt="logo github" />
        </a>
      </div>
    </div>

  )
}

export default App
