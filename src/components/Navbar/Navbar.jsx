import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa6";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';

const NavbarMenu = [
    {
        title: "Home",
    },
    {
        title: "categories",
    },
    {
        title: "blog",
    },
    {
        title: "about",
    },
    {
        title: "contact",
    },
]

const Navbar = () => {
    return (
        <>
            <div className='bg-brandDark text-white py-4 font-varela'>
                <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5}}
                 className='container flex Justisfy-between items-center'>
                    <div>
                        <a href="" className='text-xl ont-bold uppercase'>
                            Playing / <span className='font-extralight text-whit-70'>Market</span>
                        </a>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-4 pl-60'>
                            {
                                NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: "white",
                                                zIndex: 999,
                                                followSpeed: 1.5,
                                                scale: 5,
                                                mixBlendMode: "differnce",
                                            }}
                                        >
                                            <a href={item.link} className='inline-block text-sm py-2 px-3 uppercase'>{item.title}</a>
                                        </UpdateFollower>
                                    </li>
                                ))
                            }
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    scale: 5,
                                    mixBlendMode: "differnce",
                                }}
                            >
                                <button className='text-xl ps-4'>
                                    <FaHeadphones />
                                </button>
                            </UpdateFollower>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        <MdMenu className='text-4xl pl-14' />
                    </div>
                </motion.nav>
            </div>
        </>
    )
}

export default Navbar
