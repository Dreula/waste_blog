import React, {useState} from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Schedule = ({announcements}) => {

  const [data, setData] = useState('')
  return (
    <div className="mb-10 bg-slate-200 rounded-md shadow-lg mx-5 flex">
      <div className='relative container mx-auto py-6'>
          <div className='sm:text-2xl text-medium ml-5 font-bold'>
              {announcements.title}
          </div>
          <div className='sm:text-lg text-normal ml-5 font-semibold mt-2'>
              Date:&nbsp;
              <span className='font-normal sm:text-lg text-normal'> {announcements.date} </span>
          </div>
          <div className='sm:text-lg text-normal ml-5 font-semibold mt-2'>
              Time:&nbsp;
              <span className='font-normal sm:text-lg text-normal'> {announcements.time} </span>
          </div>
          <div className="sm:text-lg text-normal ml-5 font-semibold mt-2">
              Description:&nbsp; 
              <span className='font-normal sm:text-lg text-normal text-left block sm:p-5 py-3'>{announcements.desc}   </span>
          </div>
          <p className='absolute right-0 px-2 sm:py-2 py-0 bottom-1 mr-3 text-sm'>Posted: {formatDistanceToNow(new Date(announcements.createdAt), { addSuffix: true })}</p>
      </div>
    </div>
  )
}

export default Schedule

