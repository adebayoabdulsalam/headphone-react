import React from 'react'
import Blog1 from "../../assets/blog1.jpg"
import Blog2 from "../../assets/blog2.jpg"
import Blog3 from "../../assets/blog3.jpg"
import Blog4 from "../../assets/blog4.jpg"
import { UpdateFollower } from 'react-mouse-follower'

const BlogsData = [
    {
        id: 1,
        img: Blog1,
        title: "Security",
        desc:
            "Lorem ipsum dolor  ",
    },
    {
        id: 2,
        img: Blog2,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consectetu",
    },
    {
        id: 3,
        img: Blog3,
        title: "Security",
        desc:
            "Lorem ipsum dolor sit amet consec",
    },
    {
      id: 2,
      img: Blog4,
      title: "Security",
      desc:
          "Lorem ipsum dolor sit amet consectetu",
  },

];

const Blogs = () => {
  return (
    <>
    <section className='bg-gray-50'>
      <div className='container py-14'>
          <h1
          className='text-3xl font-bold 
          font-poppins text-center pb-8'
          >Blogs
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-6'>
            {BlogsData.map((data) => {
              return <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  xindex: 999,
                  followSpeed: 1.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
              <div className='
              flex flex-col items-center
              justify-center p-5 max-w-[300px]
              mx-auto shadow-lg rounded-md
              bg-white hover:-translate-y-2
              duration-300'>
                <img src={data.img} alt="" />
                <div className='space-y-2'>
                  <h1
                  className='text-xl font-bold
                  line-clamp-2'
                  >{data.title}</h1>
                  <p
                  className='line-clamp-2'
                  >{data.desc}</p>
                </div>
              </div>
              </UpdateFollower>
            })}
          </div>
      </div>
    </section>
    </>
  )
}

export default Blogs