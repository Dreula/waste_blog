import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto p-5'>
        <div className="lg:py-16 py-5 bg-white rounded-md">  
          <p className="md:hidden block pl-5 mt-0 sm:text-2xl text-medium text-gray-900 font-bold sm:pl-12">ABOUT US:</p>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12 p-5">
                  <Image 
                    src="/ManuyoUno.jpg" 
                    alt="Brgy. Manuyo Uno" 
                    loading="lazy" 
                    width='500px'
                    height='700px'
                    className='rounded-md md:hidden'
                  />
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">MISSION</h2>
                  <p className="mt-6 text-gray-600">Our system aims to implement a scheduling system to residents living along in Lopez Compound.  </p>
                  <p className="mt-4 text-gray-600"> We also aim to introduce a better and systematic way of waste management disposal schedule in order to save the time and effort of people in Lopez Compound.</p>
                  <p className="mt-4 text-gray-600">We aim to make an informative website wherein people can be aware and their queries will be addressed as well with regards to waste management.</p>
                  <p className="mt-4 text-gray-600">We aim to promote events and gathering wherein the residents can actively participate in waste management activities such as recycling and other eco friendly projects. </p>
                
                  <h2 className="text-2xl mt-5 text-gray-900 font-bold md:text-4xl">VISSION</h2>
                  <p className="mt-6 text-gray-600">The researchers visualize that the system can help the residents of Manuyo Uno- Lopez Compound in many ways since it will provide them a more systematic and organize way of scheduling system in terms of garbage collection, an informative and interactive website, and encouragement for the residents to actively participate in waste management activities.</p>
                  
                  <h2 className="text-2xl mt-5 text-gray-900 font-bold md:text-4xl">GOAL</h2>
                  <p className="mt-6 text-gray-600"> We also aim to spread awareness about the current events with regards to waste management. With this, they can actively participate and collaborate in order to have a clean and green environment. </p>
                </div>
                
              </div>
          </div>
        </div>
      </div>

  )
}

export default About