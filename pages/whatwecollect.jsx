import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Whatwecollect= () => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] =useState(0)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const data = [
    {
      title: 'Plastics',
      desc: 'Mga ibat ibang uri ng plastics'
    },
    {
      title: 'Glass',
      desc: 'Klase ng bote na kinokolekta.'
    },
    {
      title: 'Paper',
      desc: 'Patapon na mga papel or karton'
    },
    {
      title: 'Metal',
      desc: 'Klase ng mga Metal.'
    },
    {
      title: 'Sanitary Napkin & Diaper',
      desc: 'Klase ng Napkin'
    },
    {
      title: 'Bricks',
      desc: 'Mga Bricks na kinokolekta.'
    },
    {
      title: 'Organic Waste',
      desc: 'Klase ng Organic waste.'
    },
    {
      title: 'Hazardous',
      desc: 'Nakakapaminsala o nakalalason.'
    }
  ]

  useEffect(() => {
    if(modal == 1) {
      setTitle('Plastics')
      setDesc(' Mga Plastic Bottle na hindi nabebenta sa junkshop. Malulutong na Plastic. Supot sa pamimili ,Plastic wrap, Pambalot na film ng sigarilyo, Bagay na walang markang PET bottles, Palanggana / Basket o timba / Sipilyo ng ngipin')
    }
    if(modal == 2) {
      setTitle('Glass')
      setDesc('Bote ng Alak, Bote ng Condiments, Baso, Plato, Mangkok, Vase, Tasa, Basag na Salamin, Bote ng pabango')
      
    }
    if(modal == 3) {
      setTitle('Paper')
      setDesc('Mga uri ng papel: Repro, offset o pag-print ng papel, Satin o makintab na papel, Malagkit na papel, Pinahiran o pinahiran ng papel, Gulay o walang papel na papel, Craft paper, Cardboard, Papel, Karton, Recycled paper, Ecological o bio paper, Bond Paper, Tissue paper, Newsprint.')
    }
    if(modal == 4) {
      setTitle('Metal')
      setDesc('Lata, Kalan, Gunting, Mga Parte ng Computer, Kandado, Tanikala, Kubyertos, Kutsilyo, Lagari, Gripo, Pako, Yero, Bakal na tubo')
    }
    if(modal == 5) {
      setTitle('Sanitary')
      setDesc('Adult diaper, Baby diaper, Tampons, Mentrual napkin, Animal diaper.')
    }
    if(modal == 6) {
      setTitle('Bricks')
      setDesc('Hollow blocks, Tiles')
    }
    if(modal == 7) {
      setTitle('Organic Waste')
      setDesc('Mga Sirang pagkain, gulay, prutas o mga balat nito. Isda o Karne.')
    }
    if(modal == 8) {
      setTitle('Hazardous')
      setDesc('Baterya, Pintura, gamit na mantika, gasolina, rugby, varnish, bombilya, muriatic acid')
    }
  }, [modal])

  function handleModal(modalId) {
    setModal(modalId)
    setShowModal(true)
  }

  function closeModal(){
    setTitle('')
    setDesc('')
    setShowModal(false)
  }
   
  

  return (

    <div className="container mx-auto px-12">
        <div className="gap-8 lg:columns-4 md:columns-2">
            {data.map((data, i) => (
                  <div key={i+1} className="rounded-lg shadow-lg bg-white min-h-full max-w-sm mb-6 ">
                      <Image height={300} width={300} layout='responsive' className="w-100 rounded-t-lg" src={`/${i+1}.png`} alt="" />
                    <div className="p-6">
                      <h5 className="block text-gray-900 text-xl font-medium mb-2">{data.title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                          {data.desc}
                        </p>
                        <div className='flex items-center justify-center'>
                          <button 
                              type="button" 
                              onClick={() => handleModal(i+1)}
                              className=" inline-block px-6 py-3  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 
                              active:shadow-lg transition duration-150 ease-in-out">
                                BASAHIN
                          </button>
                        </div>
                    </div>
                  </div>
            ))}
        </div>
        
        <div>
          {showModal ? (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none">

                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {title}
                    </h3>
                  </div>

                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      {desc}
                    </p>

                  </div>
                  <div className="flex inset-0 z-50 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 mx-auto background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div className="opacity-5 fixed inset-0 z-40 bg-black"></div>
              </div>
            </div>
            </>
           ) : ( <></>
          )
        }
        </div>
    </div>

  
  )
}

export default Whatwecollect