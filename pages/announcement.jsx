import React, { useState, useEffect } from "react"
import { Categories, PostWidget, Schedule } from '../components/'
import { getAnnouncements } from '../lib/helper'
import FormVolunteer from '../components/FormVolunteer';


const Announcement = () => {
  
  const [announce, setAnnounce] = useState(null)

  useEffect(() => {
    getAnnouncements()
    .then( (res) => res)
    .then((announce) => {
      setAnnounce(announce)
    })
  }, [])

  return (
    <div className='container mx-auto px-10 '>
      <div className='lg:grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className="lg:col-span-8 bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
                    <span className='sm:text-3xl text-xl font-semibold py-4 pl-4 block'>
                      Announcements
                    </span>
                    {announce && announce.map((announcements, i) =>
                      <Schedule announcements={announcements} key={i} />
                    )}
                  
                </div>
                <div className='lg:col-span-4 col-span-2'>
                      <div className='lg:sticky relative top-8'>
                        <PostWidget />
                        <Categories />
                      </div>
                </div>

                <div className="lg:col-span-8 sm:pt-5 bg-white shadow-lg rounded-lg p-5 lg:p-8 pb-12 mb-8">
                  <div className="lg:col-span-8 bg-slate-200 font-semibold shadow-lg rounded-lg p-3 lg:p-8 pb-12 mb-8 text-xl">
                    Want to Volunteer?
                  </div>
                  <div>                    
                    <FormVolunteer />
                    
                  </div>
                </div>
      </div>
    </div>
  )
}


export default Announcement