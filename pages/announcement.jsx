import React from 'react'
import { Categories, PostWidget, Schedule } from '../components/'

const Announcement = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='lg:grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                  <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-xl">
                  <Schedule />
                  </div>
                  
                </div>
                <div className='lg:col-span-4 col-span-2'>
                      <div className='lg:sticky relative top-8'>
                        <PostWidget />
                        <Categories />
                      </div>
                </div>
                <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                  <div className="lg:col-span-8 bg-emerald-400 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-xl">
                      Activity
                  </div>
                </div>
                <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                  <div className="lg:col-span-8 bg-emerald-400 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 text-xl">
                    Volunteer Form
                  </div>
                </div>
      </div>
    </div>
  )
}


export default Announcement