import React from 'react'

const About = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div class="lg:flex sm:flex-row lg:justify-center">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg md:mb-2 mr-5">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="ManuyoUno.jpg" alt="" />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl  text-center font-medium mb-2">MISSION</h5>
              <p class="text-gray-700 text-base mb-4">
                            Our system aims to implement a scheduling system to residents living along in Lopez Compound. 

                            We also aim to introduce a better and systematic way of waste management disposal schedule in order to save the time and effort of people in Lopez Compound.

                            We aim to make an informative website wherein people can be aware and their queries will be addressed as well with regards to waste management.

                            We aim to promote events and gathering wherein the residents can actively participate in waste management activities such as recycling and other eco friendly projects.              </p>
            </div>
          </div>
        
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg md:mb-2 mr-4">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="ManuyoUno.jpg" alt="" />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl  text-center font-medium mb-2">VISION</h5>
              <p class="text-gray-700 text-base mb-4">
              The researchers visualize that the system can help the residents of Manuyo Uno- Lopez Compound in many ways since it will provide them a more systematic and organize way of scheduling system in terms of garbage collection, an informative and interactive website, and encouragement for the residents to actively participate in waste management activities.              </p>
            </div>
          </div>
        </div>

          <div class="flex justify-center">
             <div class="rounded-lg shadow-lg bg-white max-w-sm mb-5 mt-3">
              <a href="#!">
                <img class="rounded-t-lg" src="brgylogo.png" alt=""/>
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl text-center font-medium mb-2">GOAL</h5>
                <p class="text-gray-700 text-base mb-4">
                Our goal is to make the life of the residents in Manuyo Uno-Lopez Compound better and easier when it comes to waste management in their community. We also aim to spread awareness about the current events with regards to waste management. With this, they can actively participate and collaborate in order to have a clean and green environment.
                </p>
              </div>
            </div>
         </div>
</div>


  )
}

export default About