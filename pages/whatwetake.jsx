import React, {useRef, useState, useEffect} from 'react'
import { Comments } from '../components/'
import Link from 'next/link'

const whatwetake = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef(); 
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } =commentEl.current; 
    const { value: name } =nameEl.current; 
    const { value: email } =emailEl.current; 
    const { checked: storeData } =storeDataEl.current; 

    if(!comment || !name || !email) {
      setError(true);
      console.log(error);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if(storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj)
          .then((res) => {
              setShowSuccessMessage(true);

              setTimeout(() => {
                  setShowSuccessMessage(false);
              }, 3000);
          })
}

  return (

    <div className="container mx-auto px-12">
        <div className="gap-8 lg:columns-4 md:columns-2">
    
          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6 ">
              <a href="#!">
                <img className="rounded-t-lg" src="1.png" alt=""/>
              </a>
                <div className="p-6">
                  <h5 className="block text-gray-900 text-xl font-medium mb-2">Plastics</h5>
                    <p className="text-gray-700 text-base mb-4">
                  Mga iba't ibang uri ng plastics na mapapakinabangan , magagamit at mapagkakakitaan


                    </p>
                    <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href="/whatwetake/plastics"> BASAHIN </Link></button>
                    </div>
                </div>
            </div>

          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="2.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Glass</h5>
                    <p className="text-gray-700 text-base mb-4">

                      Hakbang sa pagtapon ng bote o basag na gamit at kaparaanan maaring gawin sa mga bote. 
                    </p>
                    <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/glass'> BASAHIN</Link> </button>
                    </div>
              </div>
          </div>
          
          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="3.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Paper</h5>
                  <p className="text-gray-700 text-base mb-4">
                    Mga paraan maaring pagkakitaan o gawin sa mga patapon na mga papel or karton
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/paper'> BASAHIN</Link> </button>
                    </div>
              </div>
          </div>
          
          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="4.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Metal</h5>
                  <p className="text-gray-700 text-base mb-4">
                  Huwag itapon ang mga metal o lata, Ito ay maaring makumpuni at pwedeng pagkakitaan. 
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/metal'> BASAHIN</Link> </button>
                    </div>
              </div>
          </div>

          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="5.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-large font-medium mb-2">Sanitary Napkin & Diaper</h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/sanitary'> BASAHIN </Link> </button>
                    </div>
              </div>
          </div>
          
          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="6.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Bricks</h5>
                  <p className="text-gray-700 text-base mb-4">
                  Mga paraang pwede gawin upang magamit muli at mapakinabangan ang mga lumang bricks.
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/bricks'> BASAHIN </Link> </button>
                    </div>
              </div>
          </div>
        
          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="7.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">OrganicW</h5>
                  <p className="text-gray-700 text-base mb-4">
                  Tamang pag Compost at  ang pakinabang nito bilang pang-abono sa mga halaman.
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/organic'> BASAHIN</Link> </button>
                    </div>
              </div>
          </div>

          <div className="rounded-lg shadow-lg bg-white max-w-sm mb-6">
                  <a href="#!">
                    <img className="rounded-t-lg" src="8.png" alt=""/>
                  </a>
              <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">Hazardous</h5>
                  <p className="text-gray-700 text-base mb-4">
                  Tamang paraan sa pagtapon ng nakakapaminsala o nakalalasong bagay.
                  </p>
                  <div className='flex items-center justify-center'>
                      <button type="button" className=" inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                       focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                       active:shadow-lg transition duration-150 ease-in-out"><Link href='/whatwetake/hazard'> BASAHIN</Link> </button>
                    </div>
              </div>
        </div>
    </div>
    
  </div>

  
  )
}

export default whatwetake