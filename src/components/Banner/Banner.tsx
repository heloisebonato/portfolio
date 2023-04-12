import React from 'react';
import { Heading } from '../Heading/Heading';
import imgGithub from '../../images/github.svg';
import imgLinkedin from '../../images/linkedin.svg';

export interface BannerProps {
    image: string;
    title: string;
    subtitle: string;
}

export interface LogoProps {
    src: string;
    alt: string;
    link: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, link }) => {
    return (
        <a href={link} target="_blank">
            <img src={src} alt={alt} className="h-12 mx-2" />
        </a>
    )
}

const Banner: React.FC<BannerProps> = ({ image, title, subtitle }) => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
                <div className="max-w-xl">
                    <Heading className="text-4xl text-limon font-milkipa">
                        {title}
                    </Heading>
                    <Heading className="text-white-800 font-medium">{subtitle}</Heading>
                    <div className="flex">
                        <Logo src={imgGithub} alt={'logo github'} link={'https://github.com/heloisebonato'} />
                        <Logo src={imgLinkedin} alt={'logo linkedin'} link={'https://www.linkedin.com/in/heloise-bonato/'} />
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <img className="w-full sm:h-72 md:h-96" src={image} alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;