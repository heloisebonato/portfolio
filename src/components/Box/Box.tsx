import React from "react";
import Slider from "react-slick";
import { Text } from "../Text/Text";

interface BoxProps {
    data: {
        image: string;
        alt: string;
        text: string;
    }[];
}

const Box: React.FC<BoxProps> = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 6000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false

                }
            }
        ]
    };

    return (
        <Slider className="py-8" {...settings}>
            {data.map((item, index) => (
                <div key={index}>
                    <div className="bg-black-400 w-56 h-56 rounded-lg flex flex-col justify-center items-center">
                        <img className="w-auto h-auto" src={item.image} alt={item.alt} />
                        <Text className="pt-8 text-xl font-black text-center">{item.text}</Text>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Box;
