import React from 'react'
import icon1 from "../../assets/obj1.png"
import icon2 from "../../assets/obj2.png"
import icon3 from "../../assets/obj3.png"
import { delay } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
const ServicesData = [
    {
        id: 1,
        icon: icon1,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        delay: 0.5,
        
    },
    {
        id: 2,
        icon: icon2,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        delay: 0.8,
        

    },
    {
        id: 3,
        icon: icon3,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis adipisci maiores suscipit veniam. Amet provident explicabo a repudiandae odit nisi officia rerum dignissimos, totam enim. Omnis neque mollitia dolores, aliquam iure accusamus sapiente asperiores, atque, soluta pariatur perspiciatis sit repellat!",
        delay: 1.1,

    },
]

const Services = () => {
    return (
        <section className='bg-gray-100 font-poppins py-8'>
            <div className='container py-14'>
                <h1 className='text-3xl font-bold text-center 
                pb-10'>Services</h1>
            </div>
            <div>
                {ServicesData.map ((data) => {
                    <UpdateFollower>
                        <div>
                            <img src={data.icon} alt="" />
                        </div>

                    </UpdateFollower>
                })}
            </div>
        </section>
    )
}

export default Services
