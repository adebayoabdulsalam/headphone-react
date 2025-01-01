import React from 'react'
import  Headphone  from '../../assets/Headphone.png';
import  Headphone2  from '../../assets/Headphone2.png';
import  Headphone3  from '../../assets/Headphone3.png';

const headphoneData = [
    {
        image: Headphone,
        title: "Headphone Wireless",
        subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        price: "$100",
        modal: "Modal brown",
        bgColor: "#8b5958"
    },
    {
        image: Headphone2,
        title: "Headphone Wireless",
        subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        price: "$100",
        modal: "Modal Green",
        bgColor: "#638153"
    },
    {
        image: Headphone3,
        title: "Headphone Wireless",
        subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        price: "$100",
        modal: "Ocean Blue",
        bgColor: "#5d818c"
    },
]

const Hero = () => {
    const [activeData, detActiveData] = React.useState
    (headphoneData[0]);
    return (
        <div>
            <>
                <section className='bg-brandDark text-white'>
                    <div className='container grid grid-cols-1 
                    md:grid-cols-2 min-h-[700px]'>
                        <div className='flex flex-col justify-center
                        py-14 md:py-0 xl:max-w-{500px}'>
                            <h1 className='text-3xl lg:text-6xl font-bold'
                            >{activeData.title}</h1>
                            <p>{activeData.subtitle}</p>
                            <button>Buy and Listen</button>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Hero
