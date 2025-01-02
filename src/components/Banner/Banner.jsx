
import React from 'react'
import Headphone4 from "../../assets/Headphone4.png"
import { UpdateFollower } from 'react-mouse-follower'
import { fadeUp } from "../Services/Services"
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <section>
            <div className='container py-1 grid grid-cols-1
        md:grid-cols- space-y-6 md:space-y-0 gap-12'>
                <div>
                    <img src={Headphone4} alt="" className='
                w-50 md:w-60' />
                </div>
                <div>
                    <div className='pl-80 md: pb-96'>
                        <motion.h1
                            variants={fadeUp(0.7)}
                            initial="hidden"
                            whileInView="show"
                            className='text-3xl lg:text-4xl'>The Latest Headphone With the Latest
                            technology
                        </motion.h1>
                        <motion.p
                            variants={fadeUp(0.9)}
                            initial="hidden"
                            whileInView="show"
                        >
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Esse tempore eligendi
                            itaque magni in quaerat, molestiae numquam
                        </motion.p>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zindex: 9999,
                                followSpeed: 0.5,
                                mixBlendMode: "difference",
                                scale: 5,
                            }}
                        >
                            <motion.button
                                variants={fadeUp(1.3)}
                                initial="hidden"
                                whileInView="show"
                                className='border-2 border-[#e33343] 
                                text-[#e33343] px-6 py-2
                                rounded-md hover:bg-[#e33343]
                                hover:text-white'
                            >Shop Now
                            </motion.button>
                        </UpdateFollower>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner