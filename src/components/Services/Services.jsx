import React from 'react'
import icon1 from "../../assets/obj1.png"
import icon2 from "../../assets/obj2.png"
import icon3 from "../../assets/obj3.png"
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'
 
export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            Transition: {
                duration: 0.5,
                delay: delay,
            }
        }
    }
}

const ServicesData = [
    {
        id: 1,
        icon: icon1,
        title: "Security",
        desc:
            "Lorem ipsum dolor  ",
        delay: 0.5,
    },
    {
        id: 2,
        icon: icon2,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consectetu",
        delay: 0.8,
    },
    {
        id: 3,
        icon: icon3,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consec",
        delay: 1.1,
    },
];

const Services = () => {
    return (
        <section className='bg-gray-100 font-poppins py-8'>
            <div className='container py-14'>
                <motion.h1
                    variants={fadeUp(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className='text-3xl font-bold text-center 
                pb-10'>Services</motion.h1>
                <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6'>
                    {ServicesData.map((data) => (
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                xindex: 9999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode: "darken",
                                backgroundElement: (
                                    <motion.div
                                        variants={fadeUp(data.delay)}
                                        initial="hidden"
                                        animate="show"
                                        whileInView=""
                                        >
                                        <img src={data.icon} alt="" />
                                    </motion.div>
                                )
                            }}
                        >
                            <div className=' flex  items-center justify-center
                        p-5 max-w-60 h-48 mx-auto shadow-lg
                        rounded-xl bg-white'>
                                <div className='w-48'>
                                    <img src={data.icon} alt="" />
                                </div>
                                <div className='text-center space-y-2'>
                                    <h1 className='text-3xl font-bold
                                '>{data.title}</h1>
                                    <p className='text-center text-sm
                                text-black/75'>{data.desc}</p>
                                </div>
                            </div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
